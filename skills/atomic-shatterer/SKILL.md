---
name: atomic-shatterer
description: Takes a monolithic note and breaks it down into small, single-concept (atomic) notes, linking them together automatically.
concerns: [citations]
---
# Atomic Note Shatterer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Ensure target subdirectories exist: `Concepts/Terms/`, `Concepts/People/`, `Concepts/Claims/`. Create if missing.
- **Git safety check**: Before processing, verify vault content is tracked by git. Stage and commit any uncommitted changes in `Concepts/`, `Sources/`, `Drafts/`, or `Inbox/` with message `pre-shatter: [[SourceFile]]`. If the vault is not yet a git repo, halt and instruct the user to initialize one. This ensures accidental overwrites can be reverted with `git checkout -- <file>`.

## Phase 1: Ingest and Check
1. Read the target monolithic file. If the file does not exist or is empty, halt and report the error.
2. Verify the file is in the vault (`Drafts/`, `Sources/`, or `Inbox/`). Warn if it resides elsewhere.
3. Identify every conceptually distinct item in the text. Parse the entire file for:
   - **Terms**: definitions, jargon, named concepts, methods, frameworks, aesthetic principles (e.g., wabi-sabi, dissipative structures).
   - **People**: authors, researchers, thinkers cited by name with substantive content (not a passing `(Smith, 2020)` citation with no elaboration).
   - **Claims**: specific arguments, theses, hypotheses, findings with enough body to stand alone.

## Phase 2: Processing
1. Extract **ALL** identified concepts from Phase 1 step 3. No maximum. No picking favorites. Every term, person, and claim that has conceptual weight gets an atomic note.

   | Category | Folder           | when to use                                    |
   |----------|------------------|------------------------------------------------|
   | term     | Concepts/Terms/  | definitions, jargon, named concepts, methods   |
   | person   | Concepts/People/ | authors, researchers, schools of thought       |
   | claim    | Concepts/Claims/ | specific arguments, theses, hypotheses, findings |

2. For each concept, create a new file at the classified folder path. Filename: lowercase, hyphenated, no prefix. Example: `Concepts/Terms/autopoiesis.md`, not `Atomic - Autopoiesis.md`.
3. Write a ≤150-word synthesis of the concept. Use dense, factual prose.
4. Add YAML frontmatter at the top of each atomic note:

```yaml
---
type: [term|person|claim]
created: YYYY-MM-DD
source: "[[OriginalFile]]"
tags: [contextual-tag-1, contextual-tag-2]
---
```
   - `type` matches the category from step 1.
   - `source` is a wikilink back to the original monolithic file.
   - `tags` are 1–3 domain-specific keywords (not the type itself).

5. Scan all atomic notes for conceptual overlap. Insert `[[Wikilink]]` between notes where concepts cross-reference.
6. Modify the original monolithic file: prepend a `## Table of Atomic Contents` section with bulleted links to **every** extracted note, grouped by category (Terms, People, Claims). The ToC must be exhaustive.
7. **Completeness verification**: Before finalizing, scan the source file a second time. Compare every named concept, person, and thesis against the extracted notes. If any were missed, extract them now. The atomic notes must account for everything of conceptual weight in the source.

## Phase 3: The F*ck Slop Pass
- Each atomic note's synthesis text must pass a mechanical scan against `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings before saving.

## Phase 4: Output Execution
- Save atomic notes to `Concepts/Terms/`, `Concepts/People/`, or `Concepts/Claims/` per classification.
- Save the modified original file in place.
