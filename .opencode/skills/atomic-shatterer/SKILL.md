---
name: atomic-shatterer
description: Takes a monolithic note and breaks it down into small, single-concept (atomic) notes, linking them together automatically.
---
# Atomic Note Shatterer Protocol

When targeting a monolithic text file (e.g., a raw PDF extraction), execute these steps:

1. **Concept Extraction:** Identify 3 to 7 distinct, self-contained concepts, ideas, or methodologies discussed in the text.
2. **Atomic Creation:** For each concept, generate a new markdown file named after the concept (e.g., `Atomic - [Concept Name].md`).
3. **Content Structuring:** Write a highly dense 150-word synthesis of that concept inside the new file. At the bottom of each atomic note, add a standard reference block:
   - `Source: [[OriginalMonolithicFile]]`
4. **Inter-linking:** Ensure that if Atomic Note A relates to Atomic Note B, you insert a `[[Wikilink]]` between them.
5. **Original Indexing:** Modify the original monolithic file, placing a "Table of Atomic Contents" at the top, linking out to all the newly created atomic notes.