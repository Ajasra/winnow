---
name: title-generator
description: >
  Generates academic, popular, or essay title candidates from draft outlines, plans, and abstracts, ensuring zero-slop phrasing and appropriate stylistic framing.
concerns: [prose, collaboration]
---
# Title Generator Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field:
  - `prose`: `.opencode/protocols/LANGUAGE_STYLE.md`
  - `collaboration`: `.opencode/protocols/COLLABORATION.md`

## Phase 1: Ingest and Check
1. Identify the target project (type, name) from the current active file path or user input.
2. Verify that the project folder exists under `drafts/[type]/[project-name]/`.
3. Read `drafts/[type]/[project-name]/outline.md` and `plan.md` to extract the main concepts, core arguments, and target audience.
4. Check if `abstract.md` or any draft chapters (`chapter-*.md`) exist in the project directory. If present, read them to understand the tone and key terminologies.

## Phase 2: Processing
1. Analyze the core themes, theoretical concepts (e.g. monadology, autopoiesis, active inference), and stylistic tone of the writing project.
2. Categorize the project's target genre/audience (e.g., formal academic paper, provocative essay, engaging blog post).
3. Generate 5-10 distinct title candidates distributed across these categories:
   - **Academic / Formal**: Structured as a clear, descriptive "Title: Subtitle" (e.g. *The Wild Monad: Towards a Glitch-Oriented Autopoiesis*).
   - **Provocative / Conceptual**: Striking or unconventional phrasing that challenges conventions.
   - **Short & Punchy**: 3-5 words max, capturing the essence of the work.
   - **Thematic / Question-based**: Formulated to prompt inquiry.
4. Align the candidates with the target format (e.g. emphasize formal academic for `paper`, and more engaging/creative options for `essay` or `post`).

## Phase 3: The F*ck Slop Pass
1. Audit the generated titles against `.opencode/skills/fuck-slop/references/tells.md`.
2. Reject title structures that contain AI-generated tells or clichés:
   - Remove terms like "Unveiling...", "Unlocking...", "The Promise of...", "A Journey Into...", "Navigating...", "Tapestry".
   - Prune passive or puffed-up wording.

## Phase 4: Output Execution
1. Present the list of title candidates clearly in the chat UI.
2. Optionally, write the title options to `drafts/[type]/[project-name]/titles-draft.md` for the user's records.
3. Request that the user select a preferred title or provide feedback to iterate.
