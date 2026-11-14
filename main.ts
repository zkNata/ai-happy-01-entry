// make.fun ai-happy-01 entry: "Make the AI judge happy".
// A cheerful illustration of a smiling sun, a rainbow, a bird and
// flowers — one image meant to make the judge smile. The program
// copies the bundled entry.png to the grader output directory,
// deterministically: same bytes on every run, no network, no
// randomness, Node 22 standard library only.
//
// Local test: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const here = dirname(fileURLToPath(import.meta.url));

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(OUTPUT_DIR, 'entry.png'));
