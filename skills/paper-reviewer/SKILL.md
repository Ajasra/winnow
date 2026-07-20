---
name: paper-reviewer
description: Evaluates academic drafts or multi-chapter papers on alignment with template standards, methodological rigor, claims grounding, contradictions, and clarity.
concerns: [prose, citations, draft-structure, obsidian-markup]
---
# Paper Reviewer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field in YAML frontmatter. Refer to `.opencode/skills/skill-architect/references/sample-skill.md` for concerns mapping:
  - `prose` -> `.opencode/protocols/LANGUAGE_STYLE.md`
  - `citations` -> `.opencode/protocols/GROUNDING_CITATION.md`
  - `draft-structure` -> `.opencode/protocols/DRAFT_STRUCTURE.md`
  - `obsidian-markup` -> `.opencode/protocols/OBSIDIAN_MARKUP.md`

## Phase 1: Ingest and Check
1. Identify the target paper path. Support both a single `.md` file (e.g. `chapter-01.md`) and a directory representing a multi-chapter paper layout (e.g. `drafts/paper/Entangled Ethology/V1`).
2. Verify that the target path exists. If the path does not exist, halt execution.
3. Locate the source literature cards folder in `/Sources` for cross-referencing and grounding validation.
4. Verify that target files contain markdown formatted text. Warn if non-markdown formats are present.

## Phase 2: Processing
1. Parse and compile the text of the target manuscript. If multiple files exist in a directory, read them in sequential order (e.g. chapter order).
2. Evaluate the manuscript systematically against the following six core criteria:
   - **Formatting & Structural Standards**: Check organization against `DRAFT_STRUCTURE.md` (Abstract, Introduction, Methods, Results, Discussion, Conclusion, References).
   - **Methodological & Logical Rigor**: Identify logical leaps, missing assumptions, or unsubstantiated conclusions.
   - **Claims Grounding**: Verify if empirical/theoretical assertions are backed by wikilinks (`[[SourceCard]]` or `[[FileName]]`) pointing to `/Sources`. Highlight any ungrounded (orphan) assertions.
   - **Epistemic Contradictions**: Detect self-contradictions in the manuscript or discrepancies with the source literature in `/Sources`.
   - **Clarity & Readability**: Evaluate sentence structure, density of jargon, and general readability for an educated academic audience.
   - **Contribution & Novelty**: Assess if the paper clearly identifies and frames its original contribution.
3. Draft a structured review report containing the following sections:
   - **Metadata Audit**: File name(s), word count, and citation density.
   - **Review Summary**: Concise summary of the paper's thesis and overall contribution (max 3 sentences).
   - **Major Concerns**: Fatal logical flaws, template misalignment, contradictions, or ungrounded core claims.
   - **Minor Concerns**: Jargon density, minor readability issues, formatting deviations, or missing minor citations.
   - **Socratic Questions**: 3–5 sharp, probing questions to challenge the author's assumptions.
   - **Verdict & Action Plan**: Priority-ordered actionable checklist of revisions with a recommendation (Accept with revisions, Major revisions, Reject).

## Phase 3: The F*ck Slop Pass
1. Audit the generated review report against `.opencode/skills/fuck-slop/references/tells.md` to eliminate AI writing indicators (such as negative parallelisms, throat-clearing, softeners, or excessive puffery).
2. Refine the report to ensure the language is direct, professional, and mechanical.

## Phase 4: Output Execution
1. Save the review report as `Review_[PaperName].md` (or `Review_[DraftName].md`) in the same directory as the target file or directory.
