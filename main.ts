import * as fs from "node:fs";

// A complete story in exactly six words: a lifetime of waiting,
// and the person waited for never arrives. The turn is the scale —
// sixty years compressed into one sentence — and what is left unsaid
// is who she is, why he waited, and what he does now.
const text = "Sixty years waiting. She never came.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
