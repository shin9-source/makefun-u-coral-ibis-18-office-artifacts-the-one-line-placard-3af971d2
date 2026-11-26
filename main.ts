import { mkdirSync, writeFileSync } from "node:fs";

const parts = [
  "Ceremonial mouse, c. 2004. Its wheel ",
  "once scrolled the tribe's records; ",
  "one click sealed every pact. Donated by the IT department.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", parts.join(""), "utf8");
