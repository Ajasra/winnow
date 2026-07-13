# Winnow Skill Template Blueprint

Every skill written or modified by the Skill Architect must match this exact format.

---
name: [kebab-case-name]
description: >
  A concise, 1-sentence explanation of what this skill does and when the agent should trigger it.
---
# [Title of Skill]

## Phase 0: Setup and Protocols
- Always list which `.opencode/protocols/` files need to be loaded before running.

## Phase 1: Ingest & Check (State Machine Steps)
1. List explicit mechanical checks first (e.g., file validation, directory scans).
2. Explicitly detail how to handle missing data or error conditions.

## Phase 2: Processing (The Core Logic)
- Break down processing into numbered, sequential, and logical phases.
- Do not use passive verbs or abstract phrases. 
- Use active commands: "Read", "Write", "Scan", "Compare", "Query".

## Phase 3: The F*ck Slop Pass
- Include a mandatory step: "Run the output through the `fuck-slop` skill before saving."

## Phase 4: Output Execution
- Specify the exact path and naming convention for saved output files.