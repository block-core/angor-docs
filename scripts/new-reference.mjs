import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const args = process.argv.slice(2);
const inputReferenceFileName = args[0];

if (!inputReferenceFileName) {
  console.error('Please provide a reference file name.');
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

const referenceFileName = generateFileName(inputReferenceFileName);

const referenceFilePath = path.join(
  __dirname,
  '../src/content/docs/reference',
  `${referenceFileName}.md`
);

const content = `---
title:  
description:  
---
`;

fs.writeFileSync(referenceFilePath, content, 'utf8');

console.log(`Reference file ${referenceFileName}.md created.`);
