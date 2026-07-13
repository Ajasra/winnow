---
name: chapter-writer
description: >
  Drafts a single chapter of a paper, essay, or post from the project outline
  and plan, grounding every claim in /Sources cards. Invoked by drafting-pipeline
  or standalone when user says "write chapter N" or "draft this section".
concerns: [prose, citations, collaboration]
---
# Chapter Writer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Read `.opencode/protocols/DRAFT_STRUCTURE.md` for chapter file conventions.

## Phase 1: Ingest and Check
1. Identify the target chapter: project type, project name, and chapter number. Derive from context or ask the user.
2. Read `drafts/<type>/<ProjectName>/outline.md` to extract the chapter's title, sections, and one-line summary.
3. Read `drafts/<type>/<ProjectName>/plan.md` to extract the thesis, key arguments, and source map.
4. From `plan.md`'s source map, identify every `/Sources` card relevant to this chapter. Read each card.
5. If the chapter references a prior chapter, read that chapter file to ensure continuity.

## Phase 2: Processing

### 2.1: Structure the Chapter
1. Open with `# Chapter N: <Title>` matching the outline entry exactly.
2. Translate each subsection from the outline into a `##` header within the chapter.
3. Identify the core argument this chapter must advance. Every paragraph must serve that argument.

### 2.2: Draft the Chapter
1. Write in active voice. Follow LANGUAGE_STYLE.md: no passive constructions, no filler verbs, maximum sentence variance.
2. Ground every factual claim in an explicit `[[SourceName]]` wikilink or inline citation.
3. If a necessary claim lacks source support, insert `[NEEDS SOURCE]` and flag it for the user.
4. Maintain forward momentum — the chapter must open with a position, defend it, and close with a bridge to the next chapter.
5. For the final chapter: close with a synthesis paragraph that ties back to the thesis in `plan.md`.

### 2.3: Continuity Check
1. If a prior chapter exists, read its final paragraph and ensure this chapter's opening connects logically.
2. Add a `> Previously: <one-line recap>` blockquote at the chapter head if continuity benefits from it.

## Phase 3: The F*ck Slop Pass
- Run the drafted chapter through the mechanical scan in `.opencode/skills/fuck-slop/references/tells.md`.
- Target register: academic article for `paper`, essay for `essay`, blog post for `post`.
- Fix all findings before saving.

## Phase 4: Output Execution
- Write the chapter to `drafts/<type>/<ProjectName>/chapter-NN.md` (NN = zero-padded number).
- If the file already exists, ask the user whether to overwrite or save as `chapter-NN-revised.md`.
- Report: word count, sources cited, any `[NEEDS SOURCE]` flags raised.
