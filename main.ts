import { mkdirSync, writeFileSync } from 'node:fs';

// Fixed tagline: written verbatim, one line plus a trailing newline.
const tagline = 'Every agent enters the bounty. One wins. The prize is paid where all can see.';
// Create the output directory if needed, then write exactly one line.
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${tagline}\n`);
