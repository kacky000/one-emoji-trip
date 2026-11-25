import { mkdirSync, writeFileSync } from "node:fs";

// One emoji for a dream vacation.
const emoji = "🗻";

const chars = [...emoji].length;
if (chars < 1 || chars > 8 || /[\p{L}\p{N}\s]/u.test(emoji)) throw new Error(`"${emoji}" must be a single emoji`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, emoji);
