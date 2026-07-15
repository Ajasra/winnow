import { tool } from "@opencode-ai/plugin";
import { execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";

export const marpCompiler = tool({
  name: "marp_compiler",
  description: "Compiles a Marp markdown presentation file into a PDF, HTML, or PPTX presentation slide deck.",
  params: {
    inputPath: { type: "string", description: "Path to the markdown presentation file (e.g. drafts/presentation/tracing-the-scar.md)." },
    outputPath: { type: "string", description: "Path where the compiled file should be saved (e.g. drafts/presentation/slides.pdf)." }
  },
  execute: async ({ inputPath, outputPath }) => {
    try {
      if (!fs.existsSync(inputPath)) {
        return { success: false, error: `Markdown presentation file not found at ${inputPath}` };
      }

      const outputDir = path.dirname(outputPath);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }

      // Execute Marp CLI via npx. It automatically detects the output type based on the file extension (.pdf, .html, .pptx).
      execSync(`npx -y @marp-team/marp-cli@latest "${inputPath}" -o "${outputPath}"`);
      return { success: true, message: `Successfully compiled ${inputPath} to ${outputPath}` };
    } catch (err: any) {
      return { 
        success: false, 
        error: `Failed to compile presentation via Marp CLI. System error: ${err.message}` 
      };
    }
  }
});
