// Make the AI Judge Laugh: the Office Joke Open
// Entry: a single line of office comedy, at most 200 characters.
// The program writes the joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The joke turns a dry HR form into the punchline: the one contact that
// has ever actually rescued anyone in this office is the Wi-Fi password,
// not a person. Specific, mundane, and true enough to sting a little.
const JOKE =
  "HR asked for my emergency contact, so I wrote down the Wi-Fi password \u2014 it's the only thing that's ever saved me here.";

// Gate guard: the sealed scorer only accepts 1-200 characters of UTF-8.
// Fail loudly here instead of shipping an entry the judge never sees.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  throw new Error(`joke is ${[...JOKE].length} chars, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
