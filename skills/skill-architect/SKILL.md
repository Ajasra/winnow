---
name: skill-architect
description: >
  Inventories, creates, refactors, and migrates Winnow skills using strict directory structures.
  Use when asked to create, update, or reorganize agent skills.
concerns: [prose]
---
# Skill Architect Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field in YAML frontmatter. Map concerns to files using the table in `.opencode/skills/skill-architect/references/sample-skill.md`.
- Read `.opencode/skills/skill-architect/references/sample-skill.md` for layout constraints and the concerns→protocol mapping.

## Phase 1: Ingest and Check
1. Identify the task type:
   - **Create**: new skill name provided, no existing directory.
   - **Update**: existing skill directory found, modifications requested.
   - **Migrate**: flat `.md` files found in `.opencode/skills/` with no matching directory.
2. Validate skill name: kebab-case, no spaces, no special characters except hyphens.

## Phase 2: Processing

### Case A: Create New Skill
1. Create directory: `.opencode/skills/[skill-name]/`.
2. Write `SKILL.md` following the sample-skill blueprint:
   - YAML frontmatter with `name`, `description`, and `concerns` (omit `concerns` if no protocols needed).
   - Phase 0: Setup and Protocols (resolve from `concerns` field).
   - Phase 1: Ingest and Check.
   - Phase 2: Processing (numbered steps, active verbs).
   - Phase 3: The F*ck Slop Pass.
   - Phase 4: Output Execution (exact paths).
3. Create `references/` or `examples/` subdirectories if needed.

### Case B: Update Existing Skill
1. Read `.opencode/skills/[skill-name]/SKILL.md`.
2. Apply modifications. Preserve existing structure where it matches the template.
3. Confirm all four Phase sections and the `concerns` field are present after edit.

### Case C: Migrate Legacy Skills
1. Find all files matching `.opencode/skills/*.md` without a corresponding directory.
2. For each: create a matching directory, move the file into it as `SKILL.md`, delete the flat file.

## Phase 3: The F*ck Slop Pass
- Before writing any `SKILL.md`, scan the generated instructions against `.opencode/skills/fuck-slop/references/tells.md`. Fix all puffery, negative parallelisms, and hedged both-sidesing. Skill instructions must be mechanical, not conversational.

## Phase 4: Output Execution
- Write `SKILL.md` to `.opencode/skills/[skill-name]/SKILL.md`.
- Confirm YAML frontmatter has valid `name`, `description`, and `concerns` fields. Confirm all phases use active verbs and numbered steps.
