// Warning Label for Humans: One Line, Big Laugh
// Writes the funniest single-line safety warning label for every human
// to /output/entry.txt. Deterministic: the same bytes on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This human will nod, smile, and say 'got it' while understanding absolutely none of this.";

if ([...LABEL].length > 160) throw new Error("label exceeds 160 characters");
if (LABEL.trim().length === 0) throw new Error("label is empty");
if (LABEL.includes("\n")) throw new Error("label must be a single line");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");

// Read-back guard: fail loudly if the written bytes are not exactly the
// chosen label (catches a truncated/partial write before the run is graded).
if (readFileSync("/output/entry.txt", "utf8") !== LABEL) {
  throw new Error("read-back mismatch: /output/entry.txt does not match LABEL");
}
console.log(`wrote ${[...LABEL].length} chars to /output/entry.txt`);
