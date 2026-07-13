---
name: anti-slop-editor
description: Aggressively edits drafts to strip out passive voice, verbose language, and AI-generated filler words.
---
# Anti-Slop Editor Protocol

When executing an edit:

1. **Read Protocols:** Read `.opencode/protocols/LANGUAGE_STYLE.md`.
2. **Scan and Destroy:** Run a regex/text match for all banned words (delve, tapestry, beacon, etc.) and replace them with precise, concrete nouns and verbs.
3. **Passive-to-Active Conversion:** Rewrite all passive sentences into active ones.
4. **Condense:** Reduce the total word count of the draft by at least 15% without losing information, maximizing cognitive density.
5. **Output:** Replace the content of the target note with the new, lean prose.