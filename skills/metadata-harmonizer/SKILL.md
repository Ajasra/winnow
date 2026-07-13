---
name: metadata-harmonizer
description: Parses raw files, extracts date, authors, and keywords, and formats/appends standard Obsidian YAML frontmatter.
---
# Metadata Harmonizer Protocol

## Phase 0: Setup and Protocols
- **Git safety**: The vault is tracked by git. Before modifying any file, stage and commit with message `pre-harmonize: [[TargetFile]]`. If frontmatter injection corrupts a file, restore with `git checkout -- <file>`.

## Phase 1: Ingest and Check
1. Read the target file. If it does not exist, halt.
2. Check if the file already has YAML frontmatter (opening `---` block). If present, note existing fields to avoid overwriting user data.

## Phase 2: Processing
1. Extract four metadata fields from the file body and filename:
   - **type**: `Meeting`, `Concept`, `Draft`, or `Source`.
   - **created**: `YYYY-MM-DD` from file creation date or text content.
   - **authors**: list of author names found in the text.
   - **tags**: 3–5 high-level topic tags.
2. Build a YAML frontmatter block:
   ```yaml
   ---
   type: [value]
   created: YYYY-MM-DD
   authors: [list]
   tags: [list]
   ---
   ```
3. If frontmatter already exists, merge new fields into the existing block. Do not delete existing fields.

## Phase 3: The F*ck Slop Pass
- N/A — this skill writes structured metadata only, not prose.

## Phase 4: Output Execution
- Prepend the YAML block to the target file. Preserve all body text unchanged.
