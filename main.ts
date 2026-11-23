import * as fs from "node:fs";

// A complete story in exactly six words: a man waits for her,
// and the turn is that she did not merely fail to arrive — she
// married someone else. What is left unsaid is how long he waited,
// why she left, and what he does now.
const text = "He waited. She married someone else.";

// Gate: exactly six words, 1–60 characters, UTF-8, not only whitespace.
const words = text.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`Expected exactly 6 words, got ${words.length}: ${text}`);
}
if (text.length < 1 || text.length > 60) {
  throw new Error(`Expected 1–60 characters, got ${text.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
