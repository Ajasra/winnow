---
name: audience-transposer
description: Adapts dense research manuscripts into clean, high-signal, non-hyperbolic content for WeChat, newsletters, or professional networks.
concerns: [prose]
---
# Audience Transposer Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.

## Phase 1: Ingest and Check
1. Read the source manuscript. If the file does not exist, halt.
2. Identify the target platform: **WeChat (Long-Form)**, **Newsletter/Substack (Medium-Form)**, or **Twitter/X (Micro-Form)**. Ask if ambiguous.

## Phase 2: Processing

### 2.1: High-Signal Extraction
1. Extract the primary contribution of the research (what was discovered or built).
2. Extract the practical mechanism (how it works under the hood).
3. Extract the real-world implications (concrete numbers or conditions, never generalizations).

### 2.2: Platform Customization

**Case A: WeChat / Substack Long-Form**
- Structure: narrative introduction, clear thematic headers (no emojis), dense paragraphs (max 4 sentences), visual callouts.
- Tone: educational, authoritative, deeply informative. Reader should want to bookmark the piece.

**Case B: Twitter/X Micro-Form (Thread)**
- Format: numbered thread, maximum 6 posts.
- Style: sentence-case, no engagement-bait hooks. Avoid "Let that sink in" or open questions.
- Constraint: each post carries exactly one distinct, grounded insight. Use standard line-breaks for readability. No one-sentence vertical stacking.

## Phase 3: The F*ck Slop Pass
- Run the generated platform text through the `fuck-slop` skill. Confirm zero exclamation marks, zero superlatives ("revolutionary", "perfect"), zero clickbait vocabulary.

## Phase 4: Output Execution
- Save the result to `Drafts/Distribution_[ManuscriptName].md`.
