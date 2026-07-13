---
name: metadata-harmonizer
description: Parses raw files, extracts date, authors, and keywords, and formats/appends standard Obsidian YAML frontmatter.
---
# Metadata Harmonizer Protocol
1. Read the target markdown file.
2. Extract: Document Type (Meeting, Concept, Draft, Source), Creation Date, Key Authors, and 3-5 high-level Tags.
3. Construct a standard YAML block at the top of the note:
   ---
   type: [Document Type]
   created: YYYY-MM-DD
   authors: [Author List]
   tags: [Tag List]
   ---
4. Write this header cleanly to the file without altering the body text.