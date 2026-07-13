---
name: fuck-slop
description: >
  Detects and erases statistical fingerprints of AI writing, rewrites text into target register.
  Use when asked to de-slop, humanize prose, or before publishing agent-drafted text.
concerns: [prose]
---
# F*ck Slop

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- Load `.opencode/skills/fuck-slop/references/tells.md` for pattern catalog.
- Load `.opencode/skills/fuck-slop/references/voices.md` for genre profiles.

## Phase 1: Ingest and Check
1. Read the target text. If provided as a file path, read the file. If inline, accept the text block directly.
2. Establish the target:
   - **Genre and venue**: academic article, tweet, reddit post, LinkedIn, email, blog, docs, marketing. If not stated and not obvious, ask.
   - **Audience and stance**: who reads it, what the author claims. Slop fills the space where a claim should be.
   - **Constraints**: length limits, required citations, house style.
3. If the target is empty or shorter than 10 words, halt.

## Phase 2: Processing (Scan → Diagnose → Rewrite → Loop)

### 2.1: Mechanical Scan
Run every detection pattern from `tells.md` against the text. Report findings as a table: category, count, worst example.

Two structural checks that regex cannot fully catch:
- **Cadence**: flag 3+ consecutive sentences within ±4 words of the same length. Flag paragraphs where every sentence shares the same shape.
- **Formatting**: flag bold scattered through prose, "Term: definition" bullets, headers on texts shorter than 400 words, the tidy intro–three-points–conclusion skeleton.

### 2.2: Rewrite by Meaning
Go finding by finding. Rule: never fix a pattern by paraphrasing the pattern. Fix by deciding what the sentence asserts, then asserting that.

**"Not X but Y" family — three-way triage:**
1. Negation is a strawman → delete X half, assert Y directly with evidence.
2. Contrast is real → name who holds X, say concretely why Y beats it.
3. Sentence asserts nothing → delete the whole sentence.

Banned escape hatches (count as new findings): "less about X than Y", "X matters, but Y matters more", "the real X is Y", "the question isn't X, it's Y", "X? Y.", "— not X, but Y".

**Everything else:**
- Puffery vocabulary (delve, tapestry, pivotal, etc.): replace with plain word or concrete fact.
- Rule-of-three lists: keep the strongest item, cut the rest unless all carry distinct information.
- False ranges ("from X to Y"): if no meaningful midpoint exists, name the two things or cut one.
- Hedged both-sidesing: commit. One opinion, stated, owned.
- Uniform cadence: vary deliberately. Fragments are legal.
- Low specificity: replace "many companies" / "studies show" with actual names and numbers — only from source text or verifiable research. Never invent specifics. Mark placeholders: `[ADD: which study?]`.
- Stock skeleton: kill throat-clearing openers, summary conclusions, engagement-bait endings.

**Overcorrection is also slop:**
- No fake typos, forced slang, manufactured "voice".
- Em dashes not banned. Density is the tell: max ~1 per 150 words, never two in one sentence.
- Do not trade precision for personality in academic text.
- Preserve the author's meaning exactly. Flag factual errors; do not silently fix.

### 2.3: Verify Loop
Re-run the full Phase 2.1 scan on the rewritten text. Fix and re-scan until zero pattern hits and the cadence check passes. Cap at 4 passes. If a pattern survives 4 passes, rewrite that sentence from scratch starting from its bare claim.

## Phase 3: The F*ck Slop Pass
- Before delivering, run the verify loop (2.3) on your own output. Confirm the change log and the final text are both clean.

## Phase 4: Output Execution
1. Check the clean text against its genre profile in `references/voices.md`: right length, formality, person, genre-specific tells absent.
2. Read the text aloud. Any sentence you would not say to the actual audience gets rewritten.
3. Deliver: the rewritten text plus a brief change log (categories fixed, counts, verify passes taken).
4. If user specified an output file path, write the clean text there. Otherwise return inline.
