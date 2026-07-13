# Winnow

**Winnow** is a local-first, decoupled AI research and synthesis engine designed to run inside an [Obsidian](https://obsidian.md/) markdown note vault. By combining the visual rendering capabilities of Obsidian with the programmatic agent loop of [OpenCode](https://opencode.ai/), Winnow automates the entire academic workflow—from raw paper ingestion to peer review—without cluttering your writing workspace.

The name **Winnow** originates from the traditional process of sifting grain to separate the wheat from the chaff. Similarly, this system filters your raw literature dumps to extract core entities, structural linkages, and synthesis.

---

## 1. System Architecture

Unlike traditional monolithic AI assistants that require uploading your private research notes to cloud-hosted databases, Winnow utilizes a **decoupled, local-first system design**:

```
[ Raw Ingest ] ──> (D:\Winnow\Inbox\)
                        │
                        ▼
  [ OpenCode / Winnow ] (Headless Backend Agent Engine)
   ├── Extracted Entities, Lit-Cards, and Metadata
   └── Programmatic Python Scripts via `uv run`
                        │
                        ▼
    [ Obsidian Vault ] (Local File Watcher)
   ├── GUI, Markdown rendering, LaTeX support
   └── Native Graph View (Dynamic Connection Mapping)
```

1. **The Core Storage (Data Layer):** Your Obsidian Vault. Everything is stored locally on your hard drive as plain `.md` and `.txt` files. 
2. **The Execution Engine (Compute Layer):** **OpenCode**, configured with a custom non-coding `"winnow"` agent. This agent runs locally or connects to highly cost-efficient cloud APIs (like DeepSeek) or local offline runners (via Ollama).
3. **The Dependency Pipeline (Virtualization Layer):** Managed dynamically on-the-fly by **`uv`** (using PEP 723 inline script metadata). No manual system-wide Python environment setup is required.

---

## 2. Directory Structure

Your project directory (`D:\Winnow`) is organized with strict separation between system configuration and research content:

```text
D:\Winnow/
├── .opencode/                  # OpenCode Agent Core Configuration
│   ├── opencode.json           # Unified schema validator for the Winnow agent
│   ├── skills/                 # Declarative Markdown-based agent skills
│   │   ├── epistemic-auditor.md
│   │   ├── atomic-shatterer.md
│   │   └── socratic-reviewer.md
│   ├── tools/                  # TypeScript wrappers for execution tools
│   │   ├── pdf_to_markdown.ts
│   │   └── arxiv_puller.ts
│   └── scripts/                # Python processing scripts (no-dependency)
│       ├── pdf_conv.py
│       └── arxiv_fetch.py
├── Inbox/                      # Target directory for raw PDFs (Ingestion)
├── Sources/                    # Structured Literature Cards / formatted papers
├── Drafts/                     # Active manuscripts, chapters, and notes
├── watch_inbox.ps1             # Windows PowerShell Folder Watcher daemon
└── README.md                   # System Documentation
```

---

## 3. Installation & Setup

### Prerequisites
Ensure your local machine has the following tools installed and added to your system `PATH`:

1.  **Node.js / npm:** Required for compiling OpenCode TS tools.
2.  **uv:** Modern Python package manager. Run `winget install astral-sh.uv` or execute:
    ```powershell
    powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
    ```
3.  **OpenCode CLI:** The core agent host engine.

### Configuration
Update `.opencode/opencode.json` with the following schema:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "winnow": {
      "name": "Winnow",
      "description": "Specialized agent for raw text parsing, academic synthesis, and semantic link generation.",
      "systemPrompt": "You are a professional academic research and writing agent operating inside an Obsidian markdown vault. Your primary function is content synthesis, structural organization, and semantic link generation. Use Obsidian Wikilinks [[LinkName]] for entities, cross-references, and glossary terms. Always ensure file modifications are idempotent.",
      "tools": {
        "read": true,
        "write": true,
        "glob": true,
        "search_grep": true,
        "pdf_to_markdown": true,
        "arxiv_puller": true
      },
      "model": "deepseek-v3"
    }
  },
  "default_agent": "winnow"
}
```

---

## 4. Winnow's Skills & Custom Tools

Winnow has access to declarative cognitive **Skills** and executable local **Tools**:

### Declarative Skills (`.opencode/skills/`)
*   **`atomic-shatterer`:** Takes a monolithic text file (such as a raw PDF conversion) and extracts distinct core concepts into individual atomic notes, linking them back to the source.
*   **`epistemic-auditor`:** Scans folders of drafts to ensure logical consistency, flags contradictions between source notes, and highlights assertions that lack citations.
*   **`socratic-reviewer`:** Assumes the role of an aggressive academic reviewer to stress-test your hypotheses, identify weak arguments, and raise hard methodological questions.

### Programmatic Tools (`.opencode/tools/` & `scripts/`)
*   **`pdf_to_markdown`:** Calls `pdf_conv.py` using `uv run`. Dynamically installs `pypdf` via inline metadata [1.4.1], converts scientific PDFs, and sanitizes double line-breaks.
*   **`arxiv_puller`:** Calls `arxiv_fetch.py` to query the public arXiv API using standard libraries. Automatically generates standardized Obsidian literature cards (Lit-Cards) with YAML front matter.

---

## 5. Automation Pipelines

You can operate Winnow at three levels of automation based on your workflow needs:

### Level 1: Non-Interactive CLI
Run quick processing instructions headlessly:
```powershell
opencode run --agent winnow "Apply socratic-reviewer to Drafts/Chapter1.md"
```

### Level 2: Inside Obsidian (Hotkeys & Command Palette)
Install the **Shell Commands** community plugin in Obsidian. Configure a hotkey (e.g., `Ctrl+Alt+R`) to run:
```bash
opencode run --agent winnow "Apply socratic-reviewer skill to '{{file_path}}'"
```
This lets you invoke Winnow and receive review notes directly inside your editor without leaving Obsidian.

### Level 3: Zero-Click Background Watcher (`watch_inbox.ps1`)
Run the PowerShell daemon in the background to monitor your `Inbox/` folder:
```powershell
.\watch_inbox.ps1
```
When you save a PDF to `D:\Winnow\Inbox\`, the daemon automatically catches it, instructs Winnow to convert it to markdown, applies the `atomic-shatterer` skill, and archives the raw PDF to your `Sources/` folder. Your Obsidian Graph View will automatically populate with linked concept nodes in the background.

---

## 6. Version Control & Safety Guidelines

Because Winnow executes modifications directly on your local file system, follow these engineering practices to maintain vault integrity:

*   **Initialize Git:** Ensure you run `git init` on your `D:\Winnow` directory before running automated loops. If an AI agent ever generates recursive links or messes up formatting, revert instantly with:
    ```powershell
    git checkout .
    ```
*   **Idempotency Checks:** When modifying skills, always instruct the agent that its changes must be idempotent (running the tool multiple times must never generate nested links like `[[[[Term]]]]`).