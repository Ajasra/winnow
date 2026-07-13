---
name: skill-architect
description: A meta-programming skill used to inventory, create, refactor, and migrate Winnow's own skills using strict directory structures.
---
# Skill Architect Protocol (Self-Optimization Loop)

When invoked to create, update, or reorganize any skill:

1. **Read Protocols:** Read `.opencode/protocols/LANGUAGE_STYLE.md` and `.opencode/protocols/GROUNDING_CITATION.md`.
2. **Access Reference Blueprint:** Read `.opencode/skills/skill-architect/references/sample-skill.md` to load the exact layout and syntax constraints.
3. **Execute Task Selection:**
   - **Case A (Create New Skill):** Set up a directory at `.opencode/skills/[new-skill-name]/`. Write the core logic inside `SKILL.md`. If required, create `references/` or `examples/` folders inside it.
   - **Case B (Refactor/Update Existing):** Read `.opencode/skills/[target-skill]/SKILL.md`, apply the requested modifications, and overwrite the file.
   - **Case C (Migrate Legacy Skills):** Find flat files in `.opencode/skills/*.md`. Create matching directories, rename the flat files to `SKILL.md`, move them, and delete the legacy flat files.
4. **Compile Pass (F*ck Slop Verification):** Before writing any generated `SKILL.md` file to disk, you must run the `fuck-slop` pass on your own generated instructions. A skill cannot contain AI slop (e.g., "delve", "testament", "pivotal"). Keep instructions highly mechanical.
5. **Output Verification:** Ensure the YAML frontmatter contains valid `name` and `description` properties, and that steps are clearly numbered.