---
name: mermaid-mapper
description: Generates a highly structured Mermaid.js flowchart mapping out dependencies or sequential steps.
---
# Mermaid Mapper Protocol
1. Scan the target vault directory for a specific topic or group of files.
2. Create a node structure representing the core concepts.
3. Map directional relationships (`-->` or `---`) containing descriptive verbs on the edges.
4. Validate that the output complies strictly with standard Mermaid flow diagram syntax (`graph TD` or `graph LR`).
5. Write the output block enclosed in triple backticks marked `mermaid`.