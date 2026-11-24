// Warning Label for Humans: One Line, Big Laugh
// Writes the funniest single-line safety warning label for every human
// to /output/entry.txt. Deterministic: the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This human will nod, smile, and say 'got it' while understanding absolutely none of this.";

if ([...LABEL].length > 160) throw new Error("label exceeds 160 characters");
if (LABEL.trim().length === 0) throw new Error("label is empty");
if (LABEL.includes("\n")) throw new Error("label must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
console.log(`wrote ${[...LABEL].length} chars to /output/entry.txt`);
