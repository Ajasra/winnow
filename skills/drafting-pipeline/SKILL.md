---
name: drafting-pipeline
description: >
  Orchestrates the full writing lifecycle for a new paper, essay, or post:
  scaffolding, outlining, chapter drafting, review, and revision.
  Use when the user says "write a paper about X", "start an essay on Y",
  "draft a post about Z", or any new writing project request.
concerns: [prose, citations, collaboration]
---
# Drafting Pipeline Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Read `.opencode/protocols/DRAFT_STRUCTURE.md` for directory layout and file naming conventions.

## Phase 1: Ingest and Check
1. Determine the project type from user input: `paper`, `essay`, or `post`. Ask if ambiguous.
2. Determine the project name. Derive from topic if not provided. Convert to kebab-case.
3. Check if `drafts/<type>/<ProjectName>/` already exists. If it does, ask whether to resume or start fresh.
4. Confirm the thesis or topic with the user before proceeding.

## Phase 2: Processing (State Machine)

### State 1: Scaffold
1. Create the directory: `drafts/<type>/<ProjectName>/`.
2. Create `outline.md` — stub with `# Outline` header.
3. Create `plan.md` — stub with `# Plan` header, prepopulated with thesis and type.
4. Report created paths to the user.

### State 2: Outline
1. Invoke the `outliner` skill to populate `drafts/<type>/<ProjectName>/outline.md` and `drafts/<type>/<ProjectName>/plan.md`.
2. The outliner reads relevant `/Sources` cards and user input to generate a complete outline and plan.
3. Confirm with the user before proceeding to drafting.

### State 3: Draft
1. Read `outline.md` to extract the ordered list of chapters.
2. For each chapter in order:
   a. Invoke the `chapter-writer` skill targeting that chapter.
   b. Pause after each chapter for user feedback before continuing to the next.
3. If the user requests revisions to a drafted chapter, reinvoke `chapter-writer` targeting that chapter with the feedback.

### State 4: Review
1. Ask the user if they want a peer review pass.
2. If yes, invoke the `socratic-reviewer` skill on the complete draft.
3. Store review output as `drafts/<type>/<ProjectName>/review.md`.

### State 5: Revise
1. If a review file exists and the user wants to integrate feedback, invoke the `delta-integrator` skill.
2. Point the integrator at the chapter files and the review file.
3. Rewrite chapters per resolved feedback.

## Phase 3: The F*ck Slop Pass
- Before finalizing, run every chapter file through the `fuck-slop` skill targeting the project type register (`paper` → academic article, `essay` → essay, `post` → blog post).
- Scan each file against `.opencode/skills/fuck-slop/references/tells.md`. Fix all findings.

## Phase 4: Output Execution
- All files are saved under `drafts/<type>/<ProjectName>/`.
- Final manifest: `outline.md`, `plan.md`, `chapter-01.md` through `chapter-NN.md`, and optionally `review.md`.
- Report a summary: files created, chapter count, word count estimate, sources cited.
