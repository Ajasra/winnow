---
name: delta-integrator
description: >
  Revises an existing draft by systematically integrating feedback from a review report,
  generating a clean draft and a change log.
concerns: [prose, citations, collaboration]
---
# Delta Integrator Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- **Git safety**: The vault is tracked by git. Before integrating feedback, stage and commit with message `pre-delta: [[DraftFile]]`. If revision is destructive, restore with `git checkout -- <file>`.

## Phase 1: Ingest and Check
1. Locate the active draft file (e.g., `Drafts/Manuscript.md`). If it does not exist, halt.
2. Locate the feedback file (e.g., `Review_Manuscript.md`). If it does not exist, halt.
3. Confirm both files are valid markdown. Warn if either appears empty.

## Phase 2: Processing

### 2.1: Delta Analysis
1. Extract every distinct critique, correction, or suggestion from the feedback file.
2. For each feedback point, identify the exact section, paragraph, or line in the active draft that must be modified.

### 2.2: Systematic Revision
1. Rewrite the targeted sections of the draft to resolve the feedback.
2. Apply style constraints from LANGUAGE_STYLE.md: no passive voice, no filler verbs, no puffery.
3. If feedback demands a new citation or fact, search `/Sources` to ground the change. If the information is missing, insert a marked placeholder: `[REVISION NEEDED: Missing source for X]`.

## Phase 3: The F*ck Slop Pass
- Run the revised draft through the `fuck-slop` skill. Confirm no style tells were introduced during the revision pass.

## Phase 4: Output Execution
1. Save the updated manuscript. Overwrite the original or write to `Drafts/Revised_[ManuscriptName].md`.
2. Generate a secondary file: `Drafts/Response_to_Feedback_[ManuscriptName].md` containing:
   - The original critique point.
   - A brief explanation of how the draft was modified to resolve it.
   - The exact section where the change was made.
