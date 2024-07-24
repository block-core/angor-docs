import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const args = process.argv.slice(2);
const inputGuideFileName = args[0];

if (!inputGuideFileName) {
  console.error('Please provide a guide file name.');
  process.exit(1);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function generateFileName(input) {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}

const guideFileName = generateFileName(inputGuideFileName);

const guideFilePath = path.join(
  __dirname,
  '../src/content/docs/guides',
  `${guideFileName}.md`
);

const content = `---
title:  
description:  
---
`;

fs.writeFileSync(guideFilePath, content, 'utf8');

console.log(`Guide file ${guideFileName}.md created.`);
