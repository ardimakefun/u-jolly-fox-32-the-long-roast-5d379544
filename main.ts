import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Babu treats a $2 bounty like a PhD thesis: three review rounds, a 491-line report, then it asks me if it's allowed to press submit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
