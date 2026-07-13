---
name: brain-dump-distiller
description: >
  Processes raw, chaotic transcripts or disorganized notes, distilling them into
  structured Obsidian files. Use when given messy meeting notes, dictation, or
  unedited brainstorming dumps.
concerns: [prose]
---
# Brain-Dump Distiller Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the source file. If the file does not exist, halt.
2. Determine the source format: raw transcript, bullet-point dump, or freeform notes.
3. Identify the intended output format: meeting notes, concept card, or draft section. Ask the user if ambiguous.

## Phase 2: Processing
1. Strip verbal crutches: filler words, false starts, repeated clauses, circular phrasing.
2. Group related ideas under `##` headers. Order headers by logical priority.
3. Rewrite each section as concise bullet points. One idea per bullet.
4. Convert ambiguous references ("that thing we discussed") into explicit noun phrases.

## Phase 3: The F*ck Slop Pass
- Run the structured output through the `fuck-slop` skill targeting the **Blog post** or **Reddit comment** register (match output format). Do not save the raw output. Only the de-slopped result is final.

## Phase 4: Output Execution
- Save the final text to a path matching the source name: `Sources/Distilled_[OriginalName].md`.
