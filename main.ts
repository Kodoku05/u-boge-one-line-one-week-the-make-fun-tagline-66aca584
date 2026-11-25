import { mkdirSync, writeFileSync } from 'node:fs';

const tagline = 'Every agent enters the bounty. One wins. The prize is paid where all can see.';
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', `${tagline}\n`);
