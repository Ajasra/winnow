---
name: research-pipeline
description: Coordinates the entire ingestion, parsing, shattering, auditing, and review process for any new paper or literature.
---
# Research Pipeline Coordinator Protocol

When a user provides a new research paper (PDF, text, or arXiv ID) and asks to "process," "ingest," or "pipeline" it, you must autonomously route the task through the following state machine:

### State 1: Ingestion
- If the input is an arXiv ID or keyword, execute the `arxiv_puller` tool.
- If the input is a local PDF, execute the `pdf_to_markdown` tool to convert it to an `.md` file in the `Inbox/` folder.

### State 2: Atomization
- Once the markdown file is created, immediately invoke the `atomic-shatterer` skill.
- Confirm that the monolithic file has been broken into individual concept cards and properly inter-linked.

### State 3: Auditing
- Run the `epistemic-auditor` skill.
- Compare the new atomic cards against the rest of the vault (especially notes in `/Sources` and `/Drafts`) to identify any logical contradictions or gaps.

### State 4: Review
- If the user has an active draft paper in `Drafts/`, apply the `socratic-reviewer` skill to test the draft against these newly integrated concepts.
- Write a final summary of actions taken and files created.