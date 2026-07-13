---
name: research-pipeline
description: Coordinates ingestion, parsing, shattering, auditing, and review for any new paper or literature.
concerns: [prose, citations]
---
# Research Pipeline Coordinator Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Identify the input: arXiv ID, keyword query, local PDF path, or raw text. Halt if none provided.
2. If arXiv ID or keyword: execute `arxiv_puller` tool to fetch the paper.
3. If local PDF: execute `pdf_to_markdown` tool. Output to `Inbox/` folder.
4. If raw text or existing `.md`: treat as already ingested (skip to Phase 2).

## Phase 2: Processing (State Machine)

### State 1: Atomization
- Invoke the `atomic-shatterer` skill on the ingested markdown file.
- Confirm the monolithic file is broken into inter-linked concept cards routed to `Concepts/Terms/`, `Concepts/People/`, and `Concepts/Claims/`.

### State 2: Auditing
- Invoke the `epistemic-auditor` skill on the new atomic cards.
- Cross-check against existing vault content in `/Sources` and `/Drafts`.

### State 3: Review
- If the user has an active draft in `Drafts/`, invoke the `socratic-reviewer` skill.
- Test the draft against newly integrated concepts.

### State 4: Summary
- Compile a summary of all files created, skills invoked, and findings. Write to `Sources/Pipeline_Summary_[PaperName].md`.

## Phase 3: The F*ck Slop Pass
- Run the final summary through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings.

## Phase 4: Output Execution
- All sub-skill outputs save to their default paths. The pipeline summary saves to `Sources/Pipeline_Summary_[PaperName].md`.
