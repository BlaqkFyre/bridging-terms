# Bridging Terms

A mobile-first word app: look up an English (or other) word, see its meaning and history, compare it in up to four languages (including Hebrew, Biblical Hebrew, Koine Greek, Latin and Aramaic), and save words to Simple or Compare lists.

- Runs entirely in the browser — hosted on GitHub Pages, no server.
- Lists are stored on each device; use **Export / Import** to move them between phone and PC.

## Data & licence
Definitions, etymologies, translations, transliterations and IPA come from [English Wiktionary](https://en.wiktionary.org/), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Easy-read respellings (e.g. *sha-LOHM*) are machine-generated from Wiktionary's transliteration and are marked **auto** in the app.

## Files
- `index.html` — the whole app (inline CSS + JS)
- `manifest.webmanifest`, `icons/` — home-screen install
- `sw.js` — service worker (online-only for now)
- `TODO.md` — progress and next steps
