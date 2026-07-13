# Winnow

**Winnow** is an AI research assistant that lives in your notes folder. Drop in a PDF, and it reads it, breaks it down into connected ideas, and helps you write, review, and organize — all on your own computer. No cloud uploads, no subscriptions.

> The name comes from winnowing grain: separating what matters from the chaff.

---

## What is Winnow?

Winnow connects two tools you may already use:

- **[Obsidian](https://obsidian.md/)** — a note-taking app that works on plain Markdown files. It gives you a visual editor, a graph of how ideas connect, and full control over your notes.
- **[OpenCode](https://opencode.ai/)** — a programmable AI agent that can read, write, search, and reason about files on your computer.

Together, they turn your notes folder into an automated research pipeline. Winnow watches a folder for new papers, converts them, extracts key ideas, links them across your notes, and can even review your drafts like a journal referee.

Everything stays local. Your research never leaves your hard drive.

---

## Who is this for?

| You are... | Winnow helps you... |
|---|---|
| A researcher or PhD student | Process papers, build literature cards, cross-reference claims |
| A writer or journalist | Organize sources, fact-check drafts, map arguments |
| A curious learner | Read and synthesize complex material into connected notes |
| A tinkerer | Automate markdown workflows with AI scripts |

You don't need to be a programmer. If you can type a command in a terminal, you can use Winnow.

---

## Quick start

### 1. Install the pieces

- **[Obsidian](https://obsidian.md/)** (free)
- **[OpenCode CLI](https://opencode.ai/)** (the AI engine)
- **[uv](https://docs.astral.sh/uv/)** — run this in PowerShell:
  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```

### 2. Clone this vault

```powershell
git clone https://github.com/yourusername/Winnow.git
```

### 3. Drop in a paper

Save any PDF to the `Inbox\` folder. Run:
```powershell
opencode run --agent winnow "Process everything in Inbox/"
```

Winnow converts the PDF to Markdown, extracts key concepts into separate notes, and links them together. Open Obsidian and you'll see the new notes in your graph.

---

## What can Winnow do?

### Ingest papers
Drag a PDF into `Inbox\`. Winnow converts it to readable Markdown and creates a **literature card** with title, authors, date, abstract, keywords, and tagged themes.

### Break down ideas
The **atomic-shatterer** skill takes a long paper and splits it into individual concept notes, each linked back to the source. One 30-page paper becomes 20-30 small, reusable notes.

### Review your writing
Run the **socratic-reviewer** on a draft. It reads your chapter and returns a hard critique: weak arguments, missing evidence, unclear logic. Like a peer reviewer, but instant.

### Audit your sources
The **epistemic-auditor** scans your notes and drafts, flagging claims that lack citations, contradictions between sources, and logical gaps.

### Build a knowledge graph
Because every note links to others with `[[wikilinks]]`, Obsidian's **Graph View** shows you how ideas connect. You can see clusters, orphan concepts, and unexpected bridges between topics.

### Draft and write
Say "start a paper about X" and Winnow scaffolds your project: `drafts/paper/your-topic/` with an outline, a writing plan, and one file per chapter. The **drafting-pipeline** walks through scaffold → outline → draft → review → revise. Each chapter is grounded in your `/Sources` cards and checked for AI slop.

### Pull papers from arXiv
```powershell
opencode run --agent winnow "Pull papers about 'transformer attention mechanisms' from arXiv"
```
Winnow fetches the paper metadata and creates a ready-to-use literature card.

---

## Skills & Tools

Winnow has two kinds of capabilities: **skills** (AI prompts that guide analysis) and **tools** (scripts that do concrete tasks).

### Skills

| Skill | What it does | Use when... |
|---|---|---|
| `atomic-shatterer` | Breaks a long text into individual concept notes with `[[links]]` | You've just ingested a paper and want to mine it for ideas |
| `epistemic-auditor` | Scans drafts for unsupported claims, contradictions, gaps | You're about to submit and want to catch weak spots |
| `socratic-reviewer` | Peer-reviews a draft with aggressive, constructive criticism | You need an outside perspective on your argument |
| `literature-synthesizer` | Weaves multiple source notes into a thematic mini-review | You're writing a lit review or introduction |
| `brain-dump-distiller` | Converts messy transcripts or raw notes into structured Obsidian files | You recorded a lecture or brainstormed ideas |
| `comparative-matrix` | Builds a comparison table from multiple source files | You're surveying methods, frameworks, or studies |
| `fact-grounder` | Checks every assertion in a draft against your sources | You want to verify nothing was invented or misremembered |
| `mermaid-mapper` | Generates a Mermaid.js flowchart of dependencies or steps | You need a visual map of how concepts relate |
| `popular-translator` | Rewrites academic text into clear, engaging language | You're sharing your work with a broader audience |
| `metadata-harmonizer` | Parses raw files and adds standardized YAML frontmatter | Your notes have inconsistent or missing metadata |
| `fuck-slop` | Strips AI-generated filler and polishes prose | You used AI to draft text and want it to sound human |
| `drafting-pipeline` | Orchestrates the full writing lifecycle: scaffold, outline, draft, review, revise | You're starting a new paper, essay, or post |
| `outliner` | Generates a structured outline and writing plan from sources + user input | You need a chapter-level roadmap before drafting |
| `chapter-writer` | Drafts one chapter file, grounding every claim in `/Sources` | You're ready to write chapter N from the outline |
| `delta-integrator` | Revises a draft by systematically applying review feedback | You have review notes and need to update the manuscript |
| `research-pipeline` | Coordinates ingestion, atomization, auditing, and review for new papers | You just dropped a PDF and want the full treatment |

### Tools

| Tool | What it does |
|---|---|
| `pdf_to_markdown` | Converts PDFs to clean Markdown using `pypdf` (auto-installed via `uv`) |
| `arxiv_puller` | Queries the arXiv API and generates Obsidian literature cards with YAML metadata |

---

## How it works

Winnow follows a simple pipeline:

```
You drop a PDF    →    Inbox\ picks it up
                              │
                              ▼
                     Winnow converts it
                     (pdf → markdown)
                              │
                              ▼
                     Atomic Shatterer
                     (paper → concept notes)
                              │
                              ▼
                     Notes land in Sources\
                     with YAML metadata and [[links]]
                              │
                              ▼
                     Obsidian shows everything
                     in Graph View, search, backlinks
```

Three layers make this work:

1. **Storage layer** — your Obsidian vault. Everything is plain `.md` files on your hard drive.
2. **Processing layer** — OpenCode running the `winnow` agent. It can use cloud AI (DeepSeek, OpenAI) or a local model (Ollama).
3. **Tool layer** — Python scripts run through `uv`, which installs dependencies on the fly. No manual setup.

---

## Directory structure

```
Winnow/
├── .opencode/                  # Agent configuration (don't touch unless customizing)
│   ├── opencode.json           # Defines the winnow agent and its tools
│   ├── skills/                 # Markdown files that define each skill's behavior
│   └── scripts/                # Python utilities (pdf_conv.py, arxiv_fetch.py)
├── Inbox/                      # Drop PDFs here — Winnow watches this folder
├── Sources/                    # Processed papers and literature cards
├── Drafts/                     # Your writing, organized by type
│   ├── paper/                  #   papers/<ProjectName>/ → outline, plan, chapters
│   ├── essay/                  #   same structure for essays
│   └── post/                   #   same structure for blog posts
├── watch_inbox.ps1             # Background watcher daemon (optional)
└── README.md
```

---

## Automation

You control how much Winnow does automatically.

### Level 1: Manual commands

Type what you want done:
```powershell
opencode run --agent winnow "Review Drafts/Chapter1.md for logical gaps"
opencode run --agent winnow "Extract concepts from Sources/smith2024.md"
```

### Level 2: Obsidian hotkeys

Install the **Shell Commands** plugin in Obsidian. Bind a hotkey (e.g. `Ctrl+Alt+R`) to:
```bash
opencode run --agent winnow "Review this file: {{file_path}}"
```
Press the hotkey on any note and Winnow reviews it in place.

### Level 3: Background watcher

Run the daemon once:
```powershell
.\watch_inbox.ps1
```
Now whenever you save a PDF to `Inbox\`, Winnow automatically converts it, shatters it into concept notes, and archives the original. Your Obsidian graph populates in the background while you keep working.

---

## Installation

### Prerequisites

- **Node.js** — for OpenCode
- **uv** — Python package manager:
  ```powershell
  winget install astral-sh.uv
  ```
  Or:
  ```powershell
  powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
  ```
- **OpenCode CLI** — [opencode.ai](https://opencode.ai/)

### Configuration

Your `.opencode/opencode.json` should look like this:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "agent": {
    "winnow": {
      "name": "Winnow",
      "description": "Research agent for parsing, synthesis, and semantic linking inside Obsidian vaults.",
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

## Safety

Winnow writes to your real files. Protect yourself:

- **Use Git.** Initialize the vault as a repo. If something goes wrong:
  ```powershell
  git checkout .
  ```
  Everything reverts instantly.

- **Work on copies.** Before running an aggressive skill like `socratic-reviewer`, duplicate your draft.

- **Review before publishing.** Winnow reduces busywork, but you are the final editor. Always read the output before submitting.

---

## Architecture (deep dive)

Winnow is **decoupled**: the AI engine (OpenCode) does not live inside Obsidian. They communicate only through the filesystem.

```
┌─────────────────────────────────────────┐
│              Your hard drive             │
│                                         │
│  Inbox\  ──→  Winnow Agent  ──→  Vault  │
│  (PDFs)       (OpenCode)        (.md)   │
│                 │                        │
│                 ├── uv run pdf_conv.py   │
│                 ├── uv run arxiv_fetch   │
│                 └── AI model (cloud or   │
│                     local via Ollama)    │
└─────────────────────────────────────────┘
```

1. **Data** — your Obsidian vault. Plain `.md` files, fully portable. No lock-in.
2. **Compute** — OpenCode with the `winnow` agent. Talks to cloud APIs (DeepSeek, OpenAI) or local models (Ollama). You choose.
3. **Dependencies** — managed by `uv` with PEP 723 inline metadata. Python packages install on first run, no global environment needed.

This design means:
- Your research is never sent to a third-party database
- You can switch AI providers without changing your notes
- Everything works offline if you use a local model
- Backups are just `git push`
