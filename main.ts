// Real-Life Patch Notes: The Comedy Changelog
// Writes one one-line patch note for a bug in real life to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "v40.1.2: fixed a bug where a name you have known for 11 years returns error 404 until the person leaves the room. Cache now clears in 0.3 seconds, not 3 hours.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
