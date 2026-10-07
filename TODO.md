# Bridging Terms — TODO

## Done (v1.0.0, 7 Oct 2026)
- [x] Researched and tested data sources from a browser (CORS): English Wiktionary parse API works; Wikidata lexemes too thin; Free Dictionary API not needed
- [x] Layout B: bottom tabs (Search / Lists / Settings), language chips, pill cards (grey closed, teal open)
- [x] Theme: Auto / Light / Charcoal dark, teal accent
- [x] Search: default language + up to 4 compare languages (remembered on device)
- [x] Results: Meaning, Word history, one card per compare language (script, transliteration, auto respelling, IPA where listed)
- [x] Biblical Hebrew card (Hebrew word + Biblical Hebrew IPA from the word's entry), Ancient/Koine Greek, Latin, Aramaic (incl. Syriac / Jewish Aramaic varieties)
- [x] Clear labels: "Wiktionary" (dictionary-sourced) vs "auto" (machine-generated respelling); says when there's no transliteration instead of guessing
- [x] Save any word to one or more lists (Simple or Compare)
- [x] Simple lists: view, rename, delete, remove items
- [x] Compare lists: 2 / 3 / 4 boxes, Simple (word only) or Details view, words shown left-to-right in one bold line above the boxes, tap a word to lock it in, type a word (saved exactly as typed), unlock, saved combinations
- [x] Export / Import lists (JSON, merge or replace)
- [x] Looked-up words cached on the device for fast reopening
- [x] Manifest + icons for Add to Home Screen; service worker registered (no caching yet)

## Next
- [ ] Publish repo + turn on GitHub Pages, then live-test on Android, iPhone and PC
- [ ] Offline mode (optional): cache the app shell in sw.js so the app opens with no signal
- [ ] Sync lists via the GitHub repo (instead of manual Export / Import)
- [ ] Reorder words in a list / drag boxes
- [ ] Notes field on saved words
- [ ] Respelling refinements per language (feedback from real use)
- [ ] "More translations" expander when a language has more than 4 terms
