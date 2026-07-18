import { tool } from "@opencode-ai/plugin";
import { execSync } from "child_process";

export const gitSafetyCommit = tool({
  name: "git_safety_commit",
  description: "Stages all changed files and commits them with a safety message to comply with the Phase 0 safety protocol.",
  params: {
    message: { type: "string", description: "The commit message (e.g. 'pre-shatter: source-name')." }
  },
  execute: async ({ message }) => {
    try {
      // Check if git is initialized
      try {
        execSync("git rev-parse --is-inside-work-tree");
      } catch {
        return { success: false, error: "The workspace is not a git repository." };
      }

      // Check if there are any changes (staged or unstaged)
      const status = execSync("git status --porcelain").toString().trim();
      if (!status) {
        return { success: true, message: "No changes to commit. Workspace is clean." };
      }

      // Stage all changes and commit
      execSync("git add -A");
      execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`);
      
      return { success: true, message: `Successfully staged and committed changes: "${message}"` };
    } catch (err: any) {
      return {
        success: false,
        error: `Failed to execute git safety commit. System error: ${err.message}`
      };
    }
  }
});
