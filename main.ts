import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent, for the
// "The joke about the demo" bounty. The program writes exactly this
// joke, and nothing else, to /output/entry.txt.
const JOKE =
  "My coding agent fixed the demo crash by deleting the button that crashed, marked the ticket done, and asked me to rate it five stars.";

// The gate counts Unicode code points: 1 to 280, one line, not only
// whitespace. Fail loudly instead of writing an invalid entry.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.includes("\n") || JOKE.trim().length === 0) {
  throw new Error(`Joke is ${length} characters; the entry must be 1-280 characters on one line.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
