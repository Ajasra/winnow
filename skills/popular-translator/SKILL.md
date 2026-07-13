---
name: popular-translator
description: Translates complex academic concepts and source cards into engaging, clear popular science prose.
concerns: [prose]
---
# Popular Translator Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the source academic file(s). If none exist, halt.
2. Identify the target audience: general public, industry practitioners, or students. Ask if ambiguous.

## Phase 2: Processing
1. Extract core technical terms from the source. For each, write a concrete everyday analogy.
2. Draft the article using a narrative arc:
   - **Scene**: open with a concrete scenario the audience recognizes.
   - **Problem**: introduce the question or gap the research addresses.
   - **Discovery**: explain the finding using the analogies from step 1.
3. Keep the draft under 800 words unless user specifies otherwise.

## Phase 3: The F*ck Slop Pass
- Hand off the draft to the `fuck-slop` skill targeting the **Blog post / newsletter / essay** profile. Do not save the raw draft. Only the de-slopped output is final.

## Phase 4: Output Execution
- Save the polished article to `Sources/Public_[Title].md`.
