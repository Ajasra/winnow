---
name: socratic-reviewer
description: Evaluates a draft paper or chapter from the perspective of an aggressive, rigorous academic peer reviewer.
concerns: [citations]
---
# Socratic Peer Reviewer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the target draft. If the file does not exist, halt.
2. Confirm the file is a draft paper or chapter (not a source card or config). Warn if the format is ambiguous.

## Phase 2: Processing
1. Evaluate the draft against four criteria:
   - **Methodological Rigor**: Are methods described and reproducible? Do logical leaps exist from data to conclusion?
   - **Clarity of Hypothesis**: Is the core thesis stated plainly, or buried under jargon?
   - **Citation Validity**: Are assertions backed by citations, or presented as self-evident?
   - **Structural Soundness**: Does the argument flow from premise to conclusion without gaps?
2. Draft the review report with these sections:
   - **Summary of the Work**: what the draft claims to achieve (≤3 sentences).
   - **Major Concerns**: fundamental flaws in logic, structure, or methodology.
   - **Minor Concerns**: grammar, missing references, formatting issues.
   - **Interrogative Questions**: 3–5 hard questions the author must answer during defense or revision.

## Phase 3: The F*ck Slop Pass
- Run the review report through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings. Reviewer language must be direct, not puffed.

## Phase 4: Output Execution
- Save the review to `Drafts/Review_[DraftName].md`.
