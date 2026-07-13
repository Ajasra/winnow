---
name: epistemic-auditor
description: Scans a folder of source cards and drafts to audit logical consistency, find contradictions, and highlight unbacked claims.
---
# Epistemic Auditor Protocol

When invoked on a research draft or folder of notes, execute the following sequence:

1. **Assertion Mapping:** Read the target text and extract the core scientific or theoretical assertions.
2. **Conflict Resolution Check:** Compare these assertions against your existing source notes in the vault. Look for:
   - **Direct Contradictions:** Where Note A contradicts Note B.
   - **Tension:** Where methodologies disagree on efficacy.
3. **Gap Detection:** Find claims made in your draft that do not reference a source card (e.g., you assert a fact but have no `[[Wikilink]]` supporting it).
4. **The Audit Report:** Generate a new file named `Audit_[TargetName].md` listing:
   - **Critical Contradictions:** [Detail of conflict + links to conflicting files].
   - **Unreferenced Claims:** [Sentences requiring a source link].
   - **Recommended Actions:** [Suggested papers to fetch via arXiv to resolve the gap].