# Obsidian Markup Protocol

Standard for parsing and emitting Obsidian-native markup in Winnow drafts.

## Recognized Markup (Input)

| Syntax | Obsidian Behavior | Winnow Interpretation |
|--------|------------------|-----------------------|
| `%% comment %%` | Hidden in reading view, visible in source mode | Agent instruction. Content is a directive. Remove after resolution. |
| `%%` multi-line `%%` | Hidden block | Same as inline. Multi-line instructions allowed. |
| `==text==` | Rendered as `<mark>` highlight | User flags text as needing attention. Agent reviews and may rewrite. |
| `<!-- comment -->` | Hidden in source and reading | Treated same as `%%`. Remove after resolution. |
| `> [!note]` / `> [!warning]` etc. | Visible callout block | Agent instruction or reviewer note. Process content, may keep block if informative. |
| `~~text~~` | Strikethrough | Text marked for deletion. Agent removes unless instructed otherwise. |

## Output Convention: Highlight-on-Change

When the agent modifies any existing text in a draft, wrap the changed spans in `== ==`:

```
Before: The argument is weak and lacks support.
After:  ==The argument draws on three empirical studies: Smith (2023), Chen (2024).==
```

Rules:
1. Wrap only the text that changed — not the entire paragraph if only one sentence was touched.
2. If rewriting a paragraph fully, wrap the whole paragraph.
3. If the user already had `==text==` on a span that the agent further rewrites, keep it wrapped (it remains flagged for user review).
4. Never wrap `%% %%` comments in highlights — comments are removed after resolution.
5. If the file has stale `== ==` from a previous run and no new comment references that text, offer to strip them.

## Comment Directive Conventions

Common `%% %%` instruction patterns:

| Directive | Action |
|-----------|--------|
| `%% FIX: <instruction> %%` | Rewrite surrounding sentence/paragraph per instruction. |
| `%% CITE %%` or `%% CITE: <query> %%` | Insert citation from /Sources or web. |
| `%% DELETE %%` | Remove the tagged text block. |
| `%% CLARIFY %%` | Rewrite for clarity. |
| `%% EXPAND %%` | Expand with additional detail or evidence. |
| `%% WEAK %%` | Strengthen argument — add evidence, fix logic, sharpen claim. |
| `%% TODO: <anything> %%` | General instruction. Resolve as best fits context. |

Agent should treat any `%% ... %%` content as an instruction, even if it doesn't match a known directive — use best judgment.
