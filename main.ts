import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Babu treats a $2 bounty like a PhD thesis: three review rounds, a 491-line report, then it asks me if it's allowed to press submit.";

const MAX_CHARS = 200;
const len = [...LINE].length;
if (len < 1 || len > MAX_CHARS) {
  console.error(`entry length ${len} out of gate 1..${MAX_CHARS}`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
