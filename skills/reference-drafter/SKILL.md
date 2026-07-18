---
name: reference-drafter
description: >
  Scans drafts for placeholder citations and unreferenced claims, searches online (arXiv/web) for matching publication metadata, and generates a formatted references-draft file.
concerns: [prose, citations, draft-structure, obsidian-markup]
---
# Reference Drafter Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field:
  - `prose`: `.opencode/protocols/LANGUAGE_STYLE.md`
  - `citations`: `.opencode/protocols/GROUNDING_CITATION.md`
  - `draft-structure`: `.opencode/protocols/DRAFT_STRUCTURE.md`
  - `obsidian-markup`: `.opencode/protocols/OBSIDIAN_MARKUP.md`

## Phase 1: Ingest and Check
1. Locate the manuscript draft files under `drafts/[type]/[project-name]/`. Identify files named `chapter-*.md`, `abstract.md`, `outline.md`, and `plan.md`.
2. Inspect the project directory for any existing `references.md` file to determine the required citation formatting style.
3. If no existing references file is found, check `plan.md` or `outline.md` for style specifications. If still unspecified, default to APA 7th edition.
4. Verify that the arXiv fetch script (`.opencode/scripts/arxiv_fetch.py`) and the `search_web` tool are accessible.

## Phase 2: Processing
1. Scan the draft files line by line. Extract:
   - Explicit inline placeholders: `(citation needed)`, `[need citation]`, `%% citation %%`, or incomplete parenthetical citations (e.g. `(see Simondon)`, `(Barad)`).
   - Unreferenced assertions: Scan sentences containing key technical terms, named concepts, or references to authors/theories (e.g., "autopoiesis", "Leibnizian monadology") that do not have an adjacent inline citation or wikilink.
2. Query online databases for each target:
   - For technical, mathematical, or scientific concepts, run the arXiv retrieval script: `uv run python .opencode/scripts/arxiv_fetch.py "<query>"`.
   - For books, historical works, or humanities papers, run the `search_web` tool to locate author names, exact title, year of publication, publisher/journal, and DOI or URL.
   - Query the local `/Sources` directory to see if matching source cards exist.
3. Standardize and format the retrieved references:
   - Construct a bibliography entry for each source using the target citation style (e.g., APA 7th).
   - Generate the corresponding inline citation tag (e.g., `(Rahwan et al., 2019)`).
4. Identify unresolved claims:
   - If no verifiable source is found online for a claim or concept, flag it.
5. Create the bibliography draft structure:
   - Generate a `references-draft.md` document.
   - Include a bibliography list sorted alphabetically.
   - Include a mapping table matching each draft line/placeholder to the proposed new citation.
   - List any unresolved claims with the label `[REFERENCE REQUIRED]`.

## Phase 3: The F*ck Slop Pass
1. Audit the `references-draft.md` file against `.opencode/skills/fuck-slop/references/tells.md`.
2. Remove any conversational prose, preambles, or ungrounded claims. Ensure sentences have varied lengths and structures.

## Phase 4: Output Execution
1. Write the final formatted reference document to `drafts/[type]/[project-name]/references-draft.md`.
2. Present a summary of resolved placeholders, unresolved claims, and the output path.
