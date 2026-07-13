---
name: anti-slop-editor
description: Aggressively edits drafts to strip out passive voice, verbose language, and AI-generated filler words.
concerns: [prose]
---
# Anti-Slop Editor Protocol

## Phase 0: Setup and Protocols
- Read protocols matching `concerns` field. See `.opencode/skills/skill-architect/references/sample-skill.md` for mapping.
- **Git safety**: The vault is tracked by git. Before modifying any file, stage and commit with message `pre-anti-slop: [[TargetFile]]`. If an edit is destructive, restore with `git checkout -- <file>`.

## Phase 1: Ingest and Check
1. Read the target file. If the file does not exist, halt and report the missing path.
2. Count total words in the draft. Record the baseline for the reduction check in Phase 2.

## Phase 2: Processing
1. Scan the text against all banned-word patterns listed in `.opencode/skills/fuck-slop/references/tells.md`. Replace every match with a concrete noun or verb.
2. Convert every passive-voice sentence to active voice.
3. Condense the draft: remove filler, merge redundant sentences, eliminate throat-clearing. Target word count ≤85% of the Phase 1 baseline.
4. Run the sentence-length variance check: no run of 3+ consecutive sentences within ±4 words of the same length.

## Phase 3: The F*ck Slop Pass
- Run the edited output through the mechanical scan defined in `.opencode/skills/fuck-slop/references/tells.md`. Fix any new findings. Repeat until clean (max 3 passes).

## Phase 4: Output Execution
- Overwrite the target file with the edited prose. Do not create a new file unless the user specifies one.
