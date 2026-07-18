---
name: domain-reviewer-editor
description: >
  Evaluates and refines drafts from the perspective of an expert panel in cybernetics/ALife, posthuman philosophy, and non-Euclidean memory architectures.
concerns: [prose, citations, collaboration, draft-structure, obsidian-markup]
---
# Domain Reviewer & Editor Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field:
  - `prose`: `.opencode/protocols/LANGUAGE_STYLE.md`
  - `citations`: `.opencode/protocols/GROUNDING_CITATION.md`
  - `collaboration`: `.opencode/protocols/COLLABORATION.md`
  - `draft-structure`: `.opencode/protocols/DRAFT_STRUCTURE.md`
  - `obsidian-markup`: `.opencode/protocols/OBSIDIAN_MARKUP.md`

## Phase 1: Ingest and Check
1. Identify the target manuscript file (`chapter-*.md` or full draft) from the user context or active document.
2. Read the project `outline.md` and `plan.md` to extract the thesis and architectural context.
3. Read the relevant `/Sources` cards (specifically `PHILOSOPHY`, `SYSTEM_OVERVIEW`, `MEMORY_SYSTEM.md`, etc.) to align theoretical ground truths.
4. Verify that the file to review and edit exists and contains markdown prose.

## Phase 2: Processing

### 2.1: Domain Expert Panel Review
1. Scan the text through three specialized expert personas:
   - **The Maturanian Cyberneticist**:
     - Evaluate homeostatic loops: Are variables ($A_{index}$ and $V$) and loop triggers mathematically and conceptually coherent?
     - Validate autopoiesis: Do claims of "operational closure" and "boundary preservation" conform to Maturana & Varela's definition, or are they used loosely?
     - Review human-agent interface coupling: Assess the MCP interaction framework against Gordon Pask's conversation theory.
   - **The New Materialist Feminist Philosopher**:
     - Critique diffractive methodology: Are Barad's agential cuts and intra-actions applied rigorously to the memory retrieval mechanism?
     - Check posthuman ethology: Is Braidotti's/Haraway's framework of situated companion species accurately represented in the "entangled ethology" of Symbia?
     - Review ontogenesis: Verify if Simondon's process of individuation is correctly mapped onto the unipolar/bipolar dual-space memory system.
   - **The Non-Euclidean Memory Architect**:
     - Inspect the gravitational warping kernel: Verify the mathematical description and logic behind the kernel deformation around semantic knots.
     - Review retrieval parameters: Critique the Goldilocks bounds (0.45-0.85 similarity) and the 16D space representations.
2. Compile a structured review report containing:
   - **Domain Critiques**: Structural, mathematical, or philosophical weaknesses identified by each expert.
   - **Interrogative Queries**: Critical questions for the researcher to resolve.

### 2.2: Line-by-Line Academic Editing
1. Rewrite the draft sections to address the weaknesses surfaced in the review pass.
2. Densify the academic prose: Replace weak or colloquial phrases with domain-specific terms (e.g. replace "we use memory" with "we convolve structural memory signatures").
3. Ensure absolute precision of all theoretical citations (e.g. Maturana & Varela, 1980; Simondon, 2020; Barad, 2007).
4. Apply the highlight-on-change convention from OBSIDIAN_MARKUP.md: wrap all modified or newly written text blocks in `== ==`.

## Phase 3: The F*ck Slop Pass
1. Run the edited draft and the review report through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`.
2. Erase academic AI tells: strip out puffery words ("delve", "tapestry", "transformative") and negative parallelisms.
3. Check sentence length variance: ensure no identical sentence lengths occur consecutively.

## Phase 4: Output Execution
1. Save the expert peer review report to `drafts/[type]/[project-name]/Review_[FileName].md`.
2. Save the edited draft to `drafts/[type]/[project-name]/[FileName]_edited.md` (or overwrite the original if requested by the user, keeping modifications highlighted).
3. Report a summary of specific domain edits made and key warnings raised by the experts.
