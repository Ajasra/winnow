---
name: speaker-prepper
description: >
  Prepares text for spoken delivery by inserting stress marks, pause points, and
  phonetic transcriptions for difficult words. Use when a speaker needs
  pronunciation-ready speaking notes.
concerns: [prose]
---
# Speaker-Prepper Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the source text file. Halt if missing.
2. Confirm the delivery context: lecture, presentation, narration, or interview. Default to presentation if unspecified.
3. Confirm the speaker's native language if pronunciation patterns differ from standard English. Default to standard English if unspecified.

## Phase 2: Processing

### 2.1: Phonetic Transcription
1. Scan the text word by word. Flag every word matching these criteria:
   - Foreign or borrowed terms not fully naturalized in English.
   - Technical terminology from a specific discipline.
   - Proper names (people, places, institutions) with non-obvious pronunciation.
   - Words of 4+ syllables.
   - Words with silent letters or irregular orthography (e.g., "colonel", "epitome", "quay").
2. For each flagged word, insert a simplified respelling in brackets immediately after its first occurrence. Capitalize the stressed syllable: `epitome [eh-PIT-oh-mee]`. Use hyphens between syllables.
3. Do not repeat the transcription on subsequent occurrences of the same word.

### 2.2: Stress Marking
1. For polysyllabic words where stress placement differs from default English patterns, insert `ˈ` (IPA primary stress mark) before the stressed syllable: `phoˈtography`.
2. For heteronyms (words with different stress patterns by grammatical function), always mark: `ˈrecord` (noun), `reˈcord` (verb).
3. For compound words where stress falls on the first element (default), skip marking. Mark only exceptions: `ˌunderˈstand`.
4. Skip stress marking on monosyllabic words.

### 2.3: Pause Insertion
1. Insert `/` for a short pause at these positions:
   - After introductory phrases and subordinate clauses.
   - Before coordinating conjunctions that introduce a new clause.
   - Between items in a complex enumeration (3+ items with internal commas).
2. Insert `//` for a longer pause at these positions:
   - Between paragraphs.
   - Before a thesis statement or key conclusion.
   - After a rhetorical question, before the answer.
3. Place pause marks on their own, separated by spaces from surrounding text. Do not insert more than one pause mark per sentence.

### 2.4: Delivery Markers
1. Insert tone markers in brackets at paragraph starts where a shift occurs: `[slow]`, `[emphatic]`, `[conversational]`.
2. Wrap direct quotations in `[quote] ... [/quote]` markers so the speaker can shift vocal register.

## Phase 3: The F*ck Slop Pass
- Scan the annotated output against `.opencode/skills/fuck-slop/references/tells.md`. Remove interpretive commentary, hedging, or editorializing from transcriptions. Annotations must be purely functional.

## Phase 4: Output Execution
- Save to `Drafts/SpeakerPrep_[OriginalName].md`.
- Preserve all original formatting: headers, lists, blockquotes, italics, bold. Annotations add to the text; they never replace or rewrite it.
