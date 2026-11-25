// Front page for Wednesday, 25 November 2026: nine stories on one sheet.
// The picture is drawn in source/page.html and photographed to entry.png; this program hands that file to the grader.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Same bytes on every run: the file is read whole and written whole, nothing is drawn or stamped at run time.
const picture = readFileSync(join(here, 'entry.png'));
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), picture);
