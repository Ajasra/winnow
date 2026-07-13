import { tool } from "@opencode-ai/plugin";
import { execSync } from "child_process";
import * as path from "path"; // <-- 1. Must import 'path'

export const pdfToMarkdown = tool({
  name: "pdf_to_markdown",
  description: "Converts a local scientific PDF file into raw markdown text inside your vault inbox.",
  params: {
    pdfPath: { type: "string", description: "Path to the PDF file." },
    outputPath: { type: "string", description: "Target markdown file path (e.g., Inbox/paper_notes.md)." }
  },
  execute: async ({ pdfPath, outputPath }) => {
    try {
      // 2. Declare and construct the script path
      const scriptPath = path.join(".opencode", "scripts", "pdf_conv.py");

      // Executes the script seamlessly inside a self-contained uv-managed environment
      execSync(`uv run "${scriptPath}" "${pdfPath}" "${outputPath}"`);
      return { success: true, message: `Successfully converted ${pdfPath} to ${outputPath}` };
    } catch (err: any) {
      return { 
        success: false, 
        error: `Failed to execute via uv. Ensure uv is installed globally. System error: ${err.message}` 
      };
    }
  }
});