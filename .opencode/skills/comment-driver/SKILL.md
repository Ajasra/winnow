---
name: comment-driver
description: >
  Reads a draft marked up with Obsidian comments (%% %%), highlights (== ==), and callouts.
  Resolves each comment, rewrites flagged text, and outputs the draft with all changes highlighted
  (== ==) for visual review in Obsidian. Use when user says "address comments", "resolve highlights",
  "process my markup", or has a draft with %% %% / == == annotations.
concerns: [prose, citations, collaboration, obsidian-markup]
---

# Comment Driver

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Mandatory: read `.opencode/protocols/OBSIDIAN_MARKUP.md` for markup parsing rules and output conventions.

## Phase 1: Ingest and Parse

1. Locate the target draft file. If user provides a path, use it. If not, ask.
2. Read the full file content.
3. Parse all Obsidian markup into a structured index:

   | Pattern | Extraction |
   |---------|-----------|
   | `%% ... %%` (inline and block) | Comment text, line range, surrounding paragraph (200 chars before/after) |
   | `==...==` | Highlighted text, line range, surrounding paragraph |
   | `<!-- ... -->` | Comment text, line range, surrounding paragraph |
   | `> [!note]` / `> [!warning]` / `> [!comment]` etc. | Callout content, line range |

4. Report findings: list each marker with type, line, and a short label (first 60 chars of content).
5. If no markers found, report: "No Obsidian markup found in draft." and halt.

## Phase 2: Resolution

Process each marker sequentially, top to bottom.

### 2.1: Determine Action

For each `%% %%` / `<!-- -->` / callout:
- Match against directive table in OBSIDIAN_MARKUP.md (FIX, CITE, DELETE, CLARIFY, EXPAND, WEAK, TODO).
- If no directive keyword found, treat entire content as instruction.

For each `== ==` highlight:
- User flagged text as needing attention. Review for: weak argument, unclear prose, missing citation, factual doubt.
- Determine what improvement is needed; if unclear, treat as "review and improve."

### 2.2: Execute

- **FIX / CLARIFY / WEAK / EXPAND / general instruction**: Rewrite the surrounding text to resolve the comment. Follow LANGUAGE_STYLE.md. Ground assertions per GROUNDING_CITATION.md.
- **CITE**: Search `/Sources` for matching source cards by keyword/author. If found, insert `[[SourceName]]` wikilink at the appropriate point. If not found, search web. If still not found, insert `[CITATION NEEDED: <query>]`.
- **DELETE**: Remove the referenced text span.
- **Highlight (`== ==`)**: Improve the highlighted text. If no clear problem, flag it as "reviewed — no change needed" in the change log.

### 2.3: Track Changes

Maintain a running change log:
```
[LINE RANGE] [MARKER TYPE] [ACTION TAKEN]
  OLD: <original text, truncated to 120 chars>
  NEW: <new text, truncated to 120 chars>
```

All new or modified text gets wrapped in `== ==` per OBSIDIAN_MARKUP.md output convention.

## Phase 3: The F*ck Slop Pass
- Run all changed text through the `fuck-slop` skill. Confirm no style tells were introduced.

## Phase 4: Output Execution

1. Write the updated draft. Overwrite the original or write to `Drafts/[Name]_resolved.md` (ask user preference on first run; default to `_resolved` suffix for safety).
2. Write change log to `Drafts/[Name]_changelog.md`:
   ```
   # Change Log: [Draft Name]
   Resolved at: [timestamp]

   | # | Line | Marker | Action | Old | New |
   |---|------|--------|--------|-----|-----|
   | 1 | 12-14 | FIX | Rewrote argument | The argument is weak... | The argument draws on... |
   ```

3. Remind user: changed text is wrapped in `== ==` for Obsidian review. Remove `==` marks after confirming each change.
