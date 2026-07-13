---
name: literature-synthesizer
description: Synthesizes a thematic academic literature review section from vault source notes.
concerns: [prose, citations]
---
# Literature Synthesizer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Collect the list of source files to synthesize. Minimum 3 sources required for a review section.
2. Read each source file. Extract: key quotes, methodology, sample size, findings, limitations.

## Phase 2: Processing
1. Group sources by thematic commonality. Each group forms one subsection of the review.
2. Draft each subsection: introduce the theme, compare source findings within it, note tensions.
3. Assemble subsections into a single draft. Maintain academic-adjacent tone. Insert `[[SourceFile]]` citations inline after each claim.
4. Write a brief concluding paragraph identifying the consensus and remaining gaps across all sources.

## Phase 3: The F*ck Slop Pass
- Hand off the complete draft to the `fuck-slop` skill targeting the **Academic article / paper** profile. Do not save the raw draft. Only the de-slopped output is final.

## Phase 4: Output Execution
- Save the polished review to `Drafts/LitReview_[Topic].md`.
