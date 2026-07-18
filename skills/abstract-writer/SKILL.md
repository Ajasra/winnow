---
name: abstract-writer
description: >
  Drafts, reviews, and refines academic, essay, or blog post abstracts using rigorous structural criteria, active-voice syntax, and highlight-on-change markup.
concerns: [prose, citations, collaboration, draft-structure, obsidian-markup]
---
# Abstract Writer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field:
  - `prose`: `.opencode/protocols/LANGUAGE_STYLE.md`
  - `citations`: `.opencode/protocols/GROUNDING_CITATION.md`
  - `collaboration`: `.opencode/protocols/COLLABORATION.md`
  - `draft-structure`: `.opencode/protocols/DRAFT_STRUCTURE.md`
  - `obsidian-markup`: `.opencode/protocols/OBSIDIAN_MARKUP.md`

## Phase 1: Ingest and Check
1. Identify the target project (type, name) from the current active file path or user input.
2. Verify that the project folder exists under `drafts/[type]/[project-name]/`.
3. Read `drafts/[type]/[project-name]/outline.md` and `plan.md` to extract the thesis statement, key arguments, and target audience.
4. Read all available draft chapters (`chapter-*.md`) in the project folder to gather technical details, methodology, and results.
5. Check if an abstract file already exists at `drafts/[type]/[project-name]/abstract.md`. If found, read its content.

## Phase 2: Processing

### 2.1: Expert Academic Abstract Review
1. Scan the existing abstract (if present) against the standard five-part academic abstract structure:
   - **Context**: Locating the work within a broader domain (1-2 sentences).
   - **Gap/Problem**: Identifying the unresolved question, contradiction, or conceptual glitch (1 sentence).
   - **Method/Approach**: Explaining how this study addresses the gap (1-2 sentences).
   - **Results/Findings**: Stating concrete results or arguments instead of vague placeholders (1-2 sentences).
   - **Implications/Contribution**: Detailing how this changes the current understanding (1 sentence).
2. Assess the abstract's logical flow, clarity, and precision.
3. Identify weak or non-specific sentences (e.g., "We discuss results...", "Implications are explored...").
4. Formulate explicit reviewer comments on structural gaps, logical inconsistencies, or slop usage. Present this assessment to the user.

### 2.2: Drafting and Refinement
1. Synthesize outline, plan, chapters, and reviewer feedback to draft a new abstract, or systematically rewrite the existing one.
2. Structure the abstract strictly around the five components: Context, Gap, Method, Results, and Implications.
3. Ensure the length remains within 150 to 250 words unless specified otherwise.
4. Write in active voice. Follow LANGUAGE_STYLE.md: vary sentence lengths and avoid passive phrasing.
5. Ground any specific claims or key conceptual dependencies using obsidian wikilinks (e.g. `[[SourceName]]`) when appropriate.
6. Apply the highlight-on-change convention from OBSIDIAN_MARKUP.md: wrap all modified or new text blocks in `== ==` when modifying an existing abstract.

## Phase 3: The F*ck Slop Pass
1. Audit the generated text against `.opencode/skills/fuck-slop/references/tells.md`.
2. Erase academic AI clichés: eliminate words like "delve", "tapestry", "transformative", "pivotal", "key role", or balanced hedging ("on the other hand", "it is important to note").
3. Ensure no two consecutive sentences share the same length or opening structure.

## Phase 4: Output Execution
1. Write the final abstract to `drafts/[type]/[project-name]/abstract.md`.
2. Output a summary report:
   - Word count of the abstract.
   - List of structural components addressed.
   - Detailed list of specific revisions/improvements made.
   - Highlighted differences for visual review in Obsidian.
