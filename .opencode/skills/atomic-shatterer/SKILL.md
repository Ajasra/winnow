---
name: atomic-shatterer
description: Takes a monolithic note and breaks it down into small, single-concept (atomic) notes, linking them together automatically.
concerns: [citations]
---
# Atomic Note Shatterer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the target monolithic file. If the file does not exist or is empty, halt and report the error.
2. Verify the file is in the vault (`Drafts/`, `Sources/`, or `Inbox/`). Warn if it resides elsewhere.

## Phase 2: Processing
1. Extract 3–7 self-contained concepts from the text. Each concept must stand alone as a single claim, methodology, result, or definition.
2. For each concept, create a new file: `Atomic - [Concept Name].md`.
3. Write a ≤150-word synthesis of the concept. Use dense, factual prose.
4. Append a source block at the bottom of each atomic note: `Source: [[OriginalFile]]`.
5. Scan all atomic notes for conceptual overlap. Insert `[[Wikilink]]` between notes where concepts cross-reference.
6. Modify the original monolithic file: prepend a `## Table of Atomic Contents` section with bulleted links to every atomic note.

## Phase 3: The F*ck Slop Pass
- Each atomic note's synthesis text must pass a mechanical scan against `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings before saving.

## Phase 4: Output Execution
- Save atomic notes adjacent to the original file (same directory).
- Save the modified original file in place.
