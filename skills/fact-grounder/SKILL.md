---
name: fact-grounder
description: Audits drafts line-by-line, matching assertions against /Sources or verifying them online, flagging unbacked statements.
concerns: [citations]
---
# Fact Grounder Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the target draft. If the file does not exist, halt.
2. Verify the `/Sources` directory exists and contains source cards. Warn if empty.

## Phase 2: Processing
1. Deconstruct the draft into individual factual statements. Split on sentence boundaries.
2. For each statement:
   - Search `/Sources` for matching evidence. Use keyword and author search.
   - If a source card supports the claim, record the citation with page/line granularity: `[[SourceFile]], p. X`.
   - If no local source exists, run a targeted web search for verification.
3. Generate a report: `Grounding_Audit_[FileName].md`.
   - Verified claims: listed with their matching citations.
   - Unverified claims: listed with the label `[UNVERIFIED: Hallucination Risk]`.

## Phase 3: The F*ck Slop Pass
- Run the audit report through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings.

## Phase 4: Output Execution
- Save the report to the same directory as the audited file.
