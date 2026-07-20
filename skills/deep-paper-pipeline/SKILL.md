---
name: deep-paper-pipeline
description: >
  Orchestrates deep academic paper construction: anchors abstract, performs multi-tour source dissection
  (extracting comparative tables, strength/weakness dialectics, tension points), maps argument architecture,
  executes grounded multi-pass drafting, and runs iterative reflection loops before final anti-slop polishing.
concerns: [prose, citations, collaboration, draft-structure, obsidian-markup]
---
# Deep Paper Pipeline Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field:
  - `prose` -> `.opencode/protocols/LANGUAGE_STYLE.md`
  - `citations` -> `.opencode/protocols/GROUNDING_CITATION.md`
  - `collaboration` -> `.opencode/protocols/COLLABORATION.md`
  - `draft-structure` -> `.opencode/protocols/DRAFT_STRUCTURE.md`
  - `obsidian-markup` -> `.opencode/protocols/OBSIDIAN_MARKUP.md`

## Phase 1: Ingest and Check
1. Determine project name and paper topic from user prompt or active document context.
2. Confirm target directory path: `drafts/paper/<ProjectName>/`.
3. Check existing sources in `/Sources`. Confirm minimum 2 source notes exist before proceeding. If missing, prompt user or run ArXiv retrieval script `.opencode/scripts/arxiv_fetch.py`.

## Phase 2: Processing (State Machine)

### State 1: Abstract & Scope Anchor
1. Create directory `drafts/paper/<ProjectName>/`.
2. Create `abstract.md` with: Title, Abstract (200-300 words), Keywords, Problem Statement, Primary Thesis.
3. Confirm thesis alignment with user before starting source dissection.

### State 2: Multi-Tour Source Dissection
1. **Tour 1 (Empirical & Matrix Extraction):** Scan `/Sources` cards. Extract methodology comparisons, quantitative metrics, datasets, and taxonomies into `comparative-matrix.md`.
2. **Tour 2 (Epistemic Dialectic Scan):** Audit `/Sources` cards for empirical strengths, methodological weaknesses, scope boundaries, and unbacked claims.
3. **Tour 3 (Tension & Interference Mapping):** Cross-reference source notes to highlight theoretical conflicts, complementary arguments, and unaddressed literature gaps.

### State 3: Argument Architecture & Blueprinting
1. Write `argument-map.md`: Define Main Thesis -> Supporting Claims -> Evidence Wikilinks -> Counter-Arguments -> Rebuttal Synthesis.
2. Write `outline.md` and `plan.md`: Map chapters to specific sources, embedded tables, and argument map nodes.

### State 4: Grounded Chapter Drafting
1. Draft chapters `chapter-01.md` through `chapter-NN.md`.
2. Ensure every claim uses granular wikilinks `[[SourceNote#page]]`.
3. Embed synthesized Markdown comparison tables directly into narrative sections.

### State 5: Socratic Review & Epistemic Audit
1. Invoke `socratic-reviewer` on all chapter drafts.
2. Invoke `fact-grounder` to verify citations line-by-line.
3. Write unified feedback to `review.md`.

### State 6 & 7: Iterative Reflection & Revision Loop
1. Write `reflection-cycle-N.md`: Assess paper against `abstract.md`, checking if counter-arguments, comparative tables, and core claims are fully realized.
2. If unresolved critical issues exist and cycle count is less than 2:
   a. Invoke `delta-integrator` to rewrite targeted chapter sections.
   b. Re-evaluate in State 5.

### State 8: The F*ck Slop Pass
1. Run all finalized chapter files through `fuck-slop` skill.
2. Erase passive voice, hedged filler, and AI writing tropes.

## Phase 3: The F*ck Slop Pass
- Before saving, scan generated instructions against `.opencode/skills/fuck-slop/references/tells.md`. Ensure active, mechanical syntax throughout.

## Phase 4: Output Execution
- Store complete project manifest under `drafts/paper/<ProjectName>/`:
  - `abstract.md`
  - `comparative-matrix.md`
  - `argument-map.md`
  - `outline.md`
  - `plan.md`
  - `chapter-01.md` ... `chapter-NN.md`
  - `reflection-cycle-1.md`
  - `review.md`
- Report execution summary: created paths, chapter count, table count, cited source count.
