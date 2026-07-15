---
name: presentation-writer
description: >
  Drafts structured slide presentations (using Marp markdown formatting) based on vault notes, papers, or prompts, customized for specific audiences, time limits, and grounding requirements.
concerns: [prose, citations, obsidian-markup]
---
# Presentation Writer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching the `concerns` field in YAML frontmatter. Map concerns to files using the table in `.opencode/skills/skill-architect/references/sample-skill.md`.
- **Git safety**: Verify the vault is tracked by git. Stage and commit with the message `pre-presentation: [[ProjectName]]` before writing files to drafts.

## Phase 1: Ingest and Check
1. Read the source file paths, outline, or draft notes. If the files do not exist, halt and notify the user.
2. Identify the target audience:
   - **Academic Conference**: focus on methodology, findings, rigorous evidence, and theoretical debates.
   - **General Public**: focus on narrative arc, concrete everyday analogies, and real-world implications.
   - **Lightning / Pitch Talk**: focus on high impact, key contribution, and fast delivery.
3. Identify presentation time limits or slide counts. If unspecified, assume:
   - *5 minutes* (Lightning): 5–7 slides.
   - *15 minutes* (Conference): 12–15 slides.
   - *45 minutes* (Lecture): 25–35 slides.
4. Establish the presentation theme (default: `gaia`).

## Phase 2: Processing

### 2.1: Outline & Slide Allocation
1. Distribute the source content logically across the target slide count.
2. Design a slide-by-slide structure with a specific purpose for each:
   - Slide 1: Title, author, affiliations.
   - Slide 2: Context/Hook (the central puzzle).
   - Slide 3: Thesis/Core Contribution.
   - Slides 4 to N: Core arguments, methodology, cases (e.g., slime mold circuit).
   - Slide N-1: Future work/implications.
   - Slide N: Summary/Contact.

### 2.2: Marp Slide Drafting
Draft the presentation file using Marp Markdown directives:
- Use `---` for slide separators.
- Add Marp configuration to the top of Slide 1:
  ```markdown
  ---
  marp: true
  theme: gaia
  _class: lead
  paginate: true
  backgroundColor: #f9f9f9
  ---
  ```
- Restrict slide content: maximum 3–4 bullet points per slide. Use bold formatting for key terms. Use two-column layouts when comparing methods or datasets.
- Anchor all slides in specific source cards or chapters. Insert inline wikilink citations (e.g., `[[Betin2026-Tracing-the-Scar]]`).

### 2.3: Speaker Notes Generation
Under each slide, add an HTML comment block `<!-- -->` containing the speaker notes:
- Write in the first person, using active voice and a professional, conversational tone.
- Match notes to the slide duration (approximately 100–130 words per minute of slide talk).
- Ground statements by referencing the source documents in the notes.

## Phase 3: The F*ck Slop Pass
- Hand off the generated slides and speaker notes to the `fuck-slop` skill. Remove all academic puffery, negative parallelisms, and rule-of-three list shapes. Ensure slide bullets are punchy and direct; avoid generic language.

## Phase 4: Output Execution
- Save the slide deck file to `drafts/presentation/[ProjectName].md`. Create the `drafts/presentation/` folder if it is missing.
- Report the slide count, estimated presentation duration, word count of speaker notes, and instructions to render using Marp.
