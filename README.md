# Bridging Terms

A mobile-first word app: look up an English (or other) word, see its meaning and history, compare it in up to eight languages (including Hebrew, Biblical Hebrew, Koine Greek, Latin and Aramaic), and save words to Simple or Bridging lists.

- Runs entirely in the browser — hosted on GitHub Pages, no server.
- Lists are stored on each device; use **Export / Import** to move them between phone and PC.

## Data & licence
Definitions, etymologies, translations, transliterations and IPA come from [English Wiktionary](https://en.wiktionary.org/), licensed [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Easy-read respellings (e.g. *sha-LOHM*) are machine-generated from Wiktionary's transliteration and are marked **auto** in the app.

Second sources: [Wikidata](https://www.wikidata.org/) (CC0) for names and labels in other languages, and the [Datamuse API](https://www.datamuse.com/api/) for extra English definitions (WordNet).

Bible-name meanings: Hitchcock's Bible Names Dictionary (1869, public domain), via [BibleData](https://github.com/BradyStephenson/bible-data) by Brady Stephenson (CC BY 4.0), stored in `data/bible-names.json`.

Old name books (public domain, read from the Internet Archive and cached on the device): C. M. Yonge, *History of Christian Names* (1884) and C. W. Bardsley, *A Dictionary of English and Welsh Surnames* (1901).

Live app: https://blaqkfyre.github.io/bridging-terms/

## Files
- `index.html` — the whole app (inline CSS + JS)
- `manifest.webmanifest`, `icons/` — home-screen install
- `sw.js` — service worker (online-only for now)
- `data/bible-names.json` — Bible-name meanings (2,619 names)
- `TODO.md` — progress and next steps
