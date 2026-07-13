---
name: epistemic-auditor
description: Scans a folder of source cards and drafts to audit logical consistency, find contradictions, and highlight unbacked claims.
concerns: [citations]
---
# Epistemic Auditor Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Identify the target text or folder to audit. If the path does not exist, halt.
2. If a folder: collect all `.md` files within it. If a single file: read it directly.
3. Load all source cards in `/Sources` for cross-reference.

## Phase 2: Processing
1. Extract every scientific or theoretical assertion from the target text. List them as separate claims.
2. For each assertion, search `/Sources` for supporting or contradicting evidence. Flag three conditions:
   - **Direct Contradiction**: source A states the opposite of source B.
   - **Tension**: methodologies disagree on efficacy or interpretation.
   - **Orphan Claim**: assertion lacks any `[[Wikilink]]` to a source card.
3. Generate a file named `Audit_[TargetName].md` with sections:
   - **Critical Contradictions**: conflict details and links to conflicting files.
   - **Unreferenced Claims**: sentences requiring a source link.
   - **Recommended Actions**: suggested papers to fetch for gap resolution.

## Phase 3: The F*ck Slop Pass
- Run the audit report through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings.

## Phase 4: Output Execution
- Save the audit report to the same directory as the target text.
