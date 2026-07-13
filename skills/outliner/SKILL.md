---
name: outliner
description: >
  Generates a structured outline and writing plan for a new draft project.
  Reads source cards from /Sources and user input to produce outline.md
  and plan.md in the project folder. Invoked by drafting-pipeline or
  standalone when user says "create an outline for X".
concerns: [prose, citations]
---
# Outliner Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Read `.opencode/protocols/DRAFT_STRUCTURE.md` for required file structure.

## Phase 1: Ingest and Check
1. Identify the target project: type (`paper`/`essay`/`post`) and project name. Derive from context or ask the user.
2. Confirm the target directory `drafts/<type>/<ProjectName>/` exists. If not, halt and instruct the user to scaffold first.
3. Read any existing stub `outline.md` and `plan.md` in the project directory.
4. Collect user input: thesis, scope, angle, target length, audience, any specific arguments or structure preferences.
5. Search `/Sources` for relevant source cards. List all cards that relate to the thesis.

## Phase 2: Processing

### 2.1: Outline Generation
1. Draft `outline.md` with the following structure:
   - `# Outline: <Title>` — H1 with kebab-case title
   - `## Part N: <Part Title>` — if multi-part work (paper only; skip for essay/post)
   - `### Chapter N: <Chapter Title>` — one per chapter
   - `#### N.N: <Section Title>` — sections within each chapter
   - Each chapter entry includes a one-line summary of its argument
   - A final `## References` section listing relevant `[[SourceName]]` wikilinks
2. Order chapters by logical argument flow, not by source order.
3. Ensure every chapter in the outline maps to at least one source card.

### 2.2: Plan Generation
1. Draft `plan.md` with the following structure:
   - `# Plan: <Title>`
   - `## Thesis` — one-sentence thesis statement
   - `## Key Arguments` — numbered list of core arguments
   - `## Source Map` — table mapping each source to the chapter(s) it supports
   - `## Scope` — estimated chapter count and word count range
   - `## Audience` — target reader profile
   - `## Order Rationale` — brief explanation of why chapters flow in this order

## Phase 3: The F*ck Slop Pass
- Run `outline.md` and `plan.md` through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix puffery, negative parallelisms, and hedged claims.

## Phase 4: Output Execution
- Write `outline.md` to `drafts/<type>/<ProjectName>/outline.md` (overwrite stub).
- Write `plan.md` to `drafts/<type>/<ProjectName>/plan.md` (overwrite stub).
- Report: chapter count, source count, estimated word range.
