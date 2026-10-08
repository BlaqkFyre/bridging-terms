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

## Done (v1.1.0, 7 Oct 2026)
- [x] Words in lists are capitalised; words not in Latin script (Hebrew, Greek, Arabic, Japanese, Chinese, Russian…) show their English transliteration first, with the original script underneath
- [x] Words saved without a transliteration (e.g. typed Hebrew) look one up from their Wiktionary entry; Greek/Cyrillic fall back to an auto transliteration marked "auto"
- [x] Each compare box has its own ✕ remove button (removes the word from that box only; the word stays in the list)
- [x] 4-box Simple view no longer breaks words mid-word

## Done (v1.2.0, 8 Oct 2026)
- [x] Fixed: meanings and word history were blank on phones (Wiktionary sends phones a different page layout); old cached results are discarded
- [x] Names work: capitalised words (Luke, Fred) look up the name entry first; lower-case words also show an "As a name" card when one exists
- [x] Second sources: Wikidata (names, people, places, concepts; fills missing languages, marked "Wikidata") and Datamuse (extra English definitions from WordNet, duplicates of Wiktionary removed)
- [x] Bubblegum theme (bright pink/purple, all text ≥ 4.5:1 contrast); theme switch now Auto / Light / Dark / Bubblegum
- [x] Saved combination names use single spaces (old " / " names converted); sentence preview uses single spaces
- [x] "Compare" lists renamed "Bridging" lists

## Done (v1.3.0, 8 Oct 2026)
- [x] Compare up to 8 languages at once (first 4 language cards open, the rest start collapsed with the word shown in the header)

## Done (v1.4.0, 8 Oct 2026)
- [x] Missing English transliterations filled with Wiktionary's transliteration rules (Russian, Greek, Ancient Greek, Arabic with vowel marks, Hindi, Korean, Chinese pinyin and more) — in result cards and in lists, marked "Wiktionary rules"; older "auto" letter-by-letter transliterations upgraded automatically
- [x] Easy-read respelling hidden when it would just repeat the transliteration; Hindi ś now reads "sh"

## Next
- [ ] Later: Biblical Hebrew & Koine Greek from Bolls.life (BDB/Thayer, Strong's, phonetic) and STEPBible lexicons (CC BY) — real biblical words + dictionary pronunciation
- [ ] Later: Wikipedia cross-language links for names of people/places (e.g. Luke → Λουκάς, لوقا)
- [ ] Later (optional): Sefaria Hebrew/Aramaic dictionary panel; Tatoeba example sentences; MyMemory machine translation (marked "machine")
- [ ] Typed words with no transliteration found (e.g. unpointed Hebrew not on Wiktionary): let me add one by hand
- [x] Published at https://blaqkfyre.github.io/bridging-terms/
- [ ] Live-test v1.2 on Android, iPhone and PC after pushing
- [ ] Offline mode (optional): cache the app shell in sw.js so the app opens with no signal
- [ ] Sync lists via the GitHub repo (instead of manual Export / Import)
- [ ] Reorder words in a list / drag boxes
- [ ] Notes field on saved words
- [ ] Respelling refinements per language (feedback from real use)
- [ ] "More translations" expander when a language has more than 4 terms
