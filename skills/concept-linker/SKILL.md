---
name: concept-linker
description: Scans draft files for terms, people, or claims defined in Concepts/ and recommends wikilinks to integrate them into the knowledge graph.
concerns: [obsidian-markup]
---
# Concept Linker Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field in YAML frontmatter. Map concerns to files using the table in `.opencode/skills/skill-architect/references/sample-skill.md`.
- **Git safety**: Verify the vault is tracked by git. Stage and commit changes with the message `pre-link: [[DraftName]]` before running modifications.

## Phase 1: Ingest and Check
1. Read the target draft or chapter file. If the file does not exist, halt and notify the user.
2. Read the names of all files (excluding extensions) under `Concepts/Terms/`, `Concepts/People/`, and `Concepts/Claims/`.

## Phase 2: Processing
1. Scan the draft file text for exact or near-exact matches of the concept names.
2. Exclude terms that are already enclosed in `[[wikilinks]]`.
3. For each unlinked match found, compile a recommendation listing the term and the line number.

## Phase 3: The F*ck Slop Pass
- Hand off the generated link recommendations and output reports to the `fuck-slop` skill. Ensure no conversational filler or AI patterns are present in the final summaries.

## Phase 4: Output Execution
1. Insert `[[wikilinks]]` around the matched terms in the file.
2. Highlight all newly added links using `==[[LinkName]]==` syntax to allow visual verification in Obsidian.
3. Offer to write the updated links to a revised file `Drafts/[Name]_linked.md` or prompt the user for confirmation before overwriting the original file.
4. Run the git safety check before overwriting to ensure any changes can be reverted.
5. Report a summary of the linked terms.
