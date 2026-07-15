---
name: concept-consolidator
description: >
  Consolidates fragmented concept notes (Terms, People, Claims) into structured synthesis notes.
  Deduplicates overlapping content, merges near-identical terms, and builds cross-links.
  Use when the user says "consolidate concepts", "merge terms", "reduce redundancy", or wants to restructure concept notes.
concerns: [citations, obsidian-markup]
---
# Concept Consolidator Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. Map concerns to files using the table in `.opencode/skills/skill-architect/references/sample-skill.md`.
- Ensure target directories exist: `Concepts/Terms/`, `Concepts/People/`, `Concepts/Claims/`.
- **Git safety check**: Before any edits, stage and commit all uncommitted changes in `Concepts/`, `Sources/`, `Drafts/`, or `Inbox/` with message `pre-consolidation: {scope}`. This ensures overwrites can be reverted via `git checkout`. If vault is not a git repo, halt and instruct user.

## Phase 1: Ingest and Check
1. Identify the consolidation scope:
   - **Single concept**: user names a specific term/person/claim. Read its note and all notes it wikilinks to.
   - **Cluster**: user names a topic area (e.g. "scar", "cybernetics"). Read all notes tagged with that topic.
   - **Full vault**: read all notes in `Concepts/` and `Sources/`.
2. For each note in scope, extract:
   - Frontmatter: type, sources, tags.
   - Body: all claim-to-source pairings (which claim comes from which source).
   - Wikilinks: all `[[outgoing]]` links.
3. Build a reverse-link map: for each concept, list every other note that links to it.

## Phase 2: Processing — Deduplication and Merge Detection
1. Scan all terms for near-duplicates — concepts with different wording but identical substance. Markers:
   - Same sources cited for the same claims.
   - Wikilinks to the same set of related concepts.
   - Definitions that differ only in phrasing, not substance.
2. For each near-duplicate cluster, select the canonical name (the most precise or most-linked term). Create a merge plan listing which files get absorbed into which.
3. Scan people notes for overlapping profiles — same person under name variants.

## Phase 3: Processing — Consolidated Note Structure
For each consolidated concept note, write or rewrite in this exact section order. Skip sections that have no content — never invent filler.

### Section order (mandatory):

1. **Overview**: 1–3 dense sentences straight after frontmatter (no `## Overview` heading). The concept's core, origin, and vault relevance. Synthesized across all sources — no source-by-source listing.

2. **Examples** (from sources): Concrete applications, case studies, or demonstrations. Each 1–2 bullet lines citing source with `[[wikilink]]`. Skip if no examples exist.

3. **Perspectives** (table, optional): Only for concepts with multiple distinct, incompatible framings. Format (3 columns only):

   | Title (one short phrase) | Text | Sources |
   |--------------------------|------|--------|

   Each row is one framing. If all sources agree, skip — no Perspectives table.

4. **Evolution** (if applicable): 1-line stages in chronological order, each citing source.

5. **Relations** (rich section): Detailed relational statements connecting this concept to others — not just "X links to Y" but "X does Z to Y through W." Each relation describes HOW two or more concepts interact, with source citation. Format:

   [[concept-A]] + [[concept-B]]: the specific relationship — X bridges Y with Z, X provides the mechanism for Y, X reveals limit of Y [[SourceFile]].

   Group by thematic cluster, not by type. 3–12 statements depending on material. This is the richest section — do not trim unique relations.

6. **Key Extracts**: 2–4 strongest verbatim quotes with source. Skip if nothing above the synthesis.

### Rules:
- Every claim carries inline `[[SourceFile]]` citation.
- **Real reduction**: Perspectives table replaces per-source subsections. If a row in the table captures what a source says, the source's content is consolidated — not kept as a separate subsection.
- Merged notes: canonical note absorbs content; duplicates become redirect stubs (Phase 5).
- Prose dense, factual. Cut "not X but Y" constructions, hedging, puffery.

## Phase 4: Processing — Cross-Link Audit
1. After writing a consolidated note, scan its wikilinks. For every `[[target]]`:
   - Verify the target file exists.
   - Verify the target file links back (add a backlink if missing).
2. Scan the consolidated note's tags. Remove tags that are redundant with the concept's own name. Add any missing tags found in merged duplicates.

## Phase 5: Output — Write and Merge
1. Write the consolidated note to its canonical path (e.g. `Concepts/Terms/scar.md`).
2. For each duplicate identified in Phase 2:
   - Verify the canonical note covers all content from the duplicate.
   - Rewrite the duplicate to a redirect stub:

   ```markdown
   ---
   type: term
   created: YYYY-MM-DD
   merged_into: "[[canonical-note]]"
   ---
   # Redirect
   This concept has been merged into [[canonical-note]].
   ```

3. Update any notes across the vault that linked to the old duplicate — point them at the canonical note.
4. Save all modified files.

## Phase 6: The F*ck Slop Pass
- Each consolidated note must pass a mechanical scan against `.opencode/skills/fuck-slop/references/tells.md`. Fix all findings before finalizing.

## Phase 7: Output Execution
- Save consolidated notes to their canonical paths in `Concepts/Terms/`, `Concepts/People/`, or `Concepts/Claims/`.
- Save redirect stubs for merged duplicates.
- Report: list of consolidated notes, list of merged redirects, count of cross-links updated.
