import { tool } from "@opencode-ai/plugin";
import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

export const arxivPuller = tool({
  name: "arxiv_puller",
  description: "Searches arXiv by keyword or specific ID, fetches metadata, and creates structured markdown source cards in the vault.",
  params: {
    query: { type: "string", description: "The search query (e.g., '2303.12001' or keyword like 'neural networks')" },
    outputFolder: { type: "string", description: "Directory where notes should be saved. Defaults to 'Sources'." }
  },
  execute: async ({ query, outputFolder = "Sources" }) => {
    try {
      const scriptPath = path.join(".opencode", "scripts", "arxiv_fetch.py");
      
      if (!fs.existsSync(scriptPath)) {
        return { success: false, error: `Python execution script not found at ${scriptPath}` };
      }

      const escapedQuery = query.replace(/"/g, '\\"');
      
      // Force uniform execution via uv run
      const stdout = execSync(`uv run "${scriptPath}" "${escapedQuery}"`).toString();
      const response = JSON.parse(stdout);

      if (!response.success) {
        return { success: false, error: response.error };
      }

      if (!fs.existsSync(outputFolder)) {
        fs.mkdirSync(outputFolder, { recursive: true });
      }

      const savedFiles: string[] = [];

      for (const paper of response.papers) {
        const cleanTitle = paper.title
          .replace(/[:\\/*?"<>|]/g, " ") 
          .replace(/\s+/g, " ")          
          .trim();
        
        const fileName = `${cleanTitle}.md`;
        const filePath = path.join(outputFolder, fileName);

        const mdContent = `---
type: literature
title: "${paper.title.replace(/"/g, '\\"')}"
authors: [${paper.authors.map((a: string) => `"${a}"`).join(", ")}]
arxiv_id: "${paper.arxiv_id}"
published: "${paper.published}"
arxiv_url: "${paper.arxiv_url}"
pdf_url: "${paper.pdf_link}"
tags: [literature, arxiv]
---
# ${paper.title}

**Authors:** ${paper.authors.join(", ")}  
**Published Date:** ${paper.published}  
**Links:** [arXiv Abstract](${paper.arxiv_url}) | [Direct PDF](${paper.pdf_link})

## Abstract
${paper.summary}

## AI Generated Initial Summary
- *Concept:* 
- *Methodology:* 
- *Key Takeaway:* 

## Reading Notes
- 
`;

        fs.writeFileSync(filePath, mdContent, "utf-8");
        savedFiles.push(filePath);
      }

      return { 
        success: true, 
        message: `Successfully processed query. Generated ${savedFiles.length} file(s).`,
        files: savedFiles
      };

    } catch (e: any) {
      return { success: false, error: `Execution crashed: ${e.message}` };
    }
  }
});