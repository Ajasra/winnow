# Winnow Skill Template Blueprint

Every skill written or modified by the Skill Architect must match this exact format.

---
name: [kebab-case-name]
description: >
  A concise, 1-sentence explanation of what this skill does and when the agent should trigger it.
concerns: [prose, citations, collaboration]   # omit if no protocols needed; see mapping below
---
# [Title of Skill]

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field. Map concerns to files using the table at the bottom of this blueprint.

## Phase 1: Ingest and Check
1. List explicit mechanical checks first (file validation, directory scans).
2. Detail how to handle missing data or error conditions.

## Phase 2: Processing (The Core Logic)
- Break down processing into numbered, sequential phases.
- Use active commands: "Read", "Write", "Scan", "Compare", "Query".
- No passive verbs or abstract phrases.

## Phase 3: The F*ck Slop Pass
- Mandatory step: run output through the `fuck-slop` skill or scan against `tells.md` before saving.

## Phase 4: Output Execution
- Specify the exact path and naming convention for saved output files.

---

## Concerns → Protocol Mapping

Single source of truth. Add new protocols here; all skills resolve Phase 0 from this table.

| Concern | Protocol File |
|---------|--------------|
| `prose` | `.opencode/protocols/LANGUAGE_STYLE.md` |
| `citations` | `.opencode/protocols/GROUNDING_CITATION.md` |
| `collaboration` | `.opencode/protocols/COLLABORATION.md` |
| `draft-structure` | `.opencode/protocols/DRAFT_STRUCTURE.md` |
| `obsidian-markup` | `.opencode/protocols/OBSIDIAN_MARKUP.md` |
