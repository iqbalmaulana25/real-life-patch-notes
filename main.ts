// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note for a bug in real life to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v34.2.1: fixed a bug where walking through a doorway deleted the reason you walked through it. The fix is already active. You will not remember the bug.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
