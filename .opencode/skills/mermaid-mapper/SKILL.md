---
name: mermaid-mapper
description: Generates a structured Mermaid.js flowchart mapping dependencies or sequential steps from vault content.
---
# Mermaid Mapper Protocol

## Phase 0: Setup and Protocols
- No protocols required.

## Phase 1: Ingest and Check
1. Confirm the target scope: a directory, a set of files, or a specific topic. If ambiguous, ask.
2. Scan the target for core concepts or entities. Minimum 2 nodes required for a graph.

## Phase 2: Processing
1. List every distinct concept or entity as a node. Assign each a short, unique ID.
2. Map directional relationships between nodes. For each edge, write a verb phrase describing the relationship.
3. Select graph direction: `graph TD` (top-down) for sequential processes, `graph LR` (left-right) for dependency maps.
4. Assemble the Mermaid code block. Validate syntax: all node IDs are alphanumeric, edges use `-->` or `---`, no orphan nodes.

## Phase 3: The F*ck Slop Pass
- Check that node labels and edge labels contain no puffery or slop vocabulary per `.opencode/skills/fuck-slop/references/tells.md`. Fix any findings.

## Phase 4: Output Execution
- Write the diagram to `Sources/Diagram_[Topic].md` enclosed in a ` ```mermaid ` code block.
