---
name: comparative-matrix
description: Analyzes multiple selected source files and compiles a structured Markdown comparison table/matrix in the vault.
concerns: [citations]
---
# Comparative Matrix Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Collect the list of source files to compare. Minimum 2 files required. Halt with an error if fewer.
2. Read each source file. Confirm it is a source card or draft (not a config or template file).

## Phase 2: Processing
1. For each source file, extract four fields:
   - **Methodology**: qualitative, empirical, survey, meta-analysis, etc.
   - **Data/Sample Size**: N value, dataset name, or "N/A" for theoretical papers.
   - **Key Finding**: primary statistical or theoretical output in ≤2 sentences.
   - **Primary Limitation**: bottleneck or weakness the authors identify.
2. Build a Markdown table. First column is `[[SourceName]]`. Remaining columns: Methodology, Sample, Finding, Limitation.
3. Below the table, write a 3-paragraph synthesis:
   - **Consensus**: where sources agree.
   - **Discrepancy**: where findings diverge.
   - **Gaps**: questions left unanswered by these sources.

## Phase 3: The F*ck Slop Pass
- Run the synthesis paragraphs through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings.

## Phase 4: Output Execution
- Save the matrix to `Sources/Matrix_[Topic].md`.
