# Draft Structure Protocol

## Directory Layout

Every writing project lives in a subfolder of `drafts/` keyed by type:

```
drafts/
  paper/<ProjectName>/
  essay/<ProjectName>/
  post/<ProjectName>/
```

## Required Files Per Project

| File | Purpose |
|------|---------|
| `outline.md` | Hierarchical structure: parts, chapters, sections, subsections. Ordered by logical flow. |
| `plan.md` | Writing strategy: thesis statement, key arguments, source mapping, target audience, estimated scope. |
| `chapter-NN.md` | One file per chapter. NN = zero-padded chapter number matching outline order. |

## Naming Rules

- `<ProjectName>`: kebab-case, no spaces. Example: `the-death-of-epistemology`
- Chapter files: `chapter-01.md`, `chapter-02.md`, ...
- `outline.md` and `plan.md` filenames are fixed — never renamed.
- Type folder: lowercase, singular (`paper`, `essay`, `post`).
- If a project type does not exist under `drafts/`, create it.

## Chapter File Convention

Each `chapter-NN.md` opens with its title as an H1. Cross-reference source cards using `[[SourceName]]` wikilinks. If a chapter references other chapters, use `[[chapter-NN]]` wikilinks.

## Post-Project Invariants

- Every project folder must contain at minimum `outline.md` and `plan.md` before any chapter drafting begins.
- No chapter file may be drafted before its corresponding entry exists in `outline.md`.
- The `plan.md` must list every source from `/Sources` that the project will draw upon.
