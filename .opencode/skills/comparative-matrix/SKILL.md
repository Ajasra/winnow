---
name: comparative-matrix
description: Analyzes multiple selected source files and compiles a structured Markdown comparison table/matrix in the vault.
---
# Comparative Matrix Protocol

When instructed to compare multiple source cards or papers, execute this sequence:

1. **Verify Protocols:** Read `.opencode/protocols/GROUNDING_CITATION.md`.
2. **Extract Metrics:** For each target file, read the source card and extract:
   - **Methodology:** (e.g., Qualitative, Empirical, Survey).
   - **Data/Sample Size:** (e.g., $N=500$, dataset used).
   - **Key Finding:** (The primary statistical or theoretical output).
   - **Primary Limitation:** (The bottleneck or weakness identified by the authors or your notes).
3. **Generate Matrix:** Construct a Markdown table mapping these metrics. Every row must begin with a backlinked reference: `[[SourceNoteName]]`.
4. **Contextual Analysis:** Below the table, write a 3-paragraph synthesis highlighting:
   - **Consensus:** Where do the papers agree?
   - **Discrepancy:** Where do their findings diverge?
   - **Gaps:** What questions do these sources leave unanswered?
5. **Write Output:** Save the matrix to `Sources/Matrix_[Topic].md`.