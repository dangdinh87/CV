import { readFileSync, writeFileSync } from 'fs';

const filePath = process.argv[2];
const content = readFileSync(filePath, 'utf8');

// Strategy: process the file character by character to properly track
// template literal boundaries and escape inline backticks

let result = '';
let i = 0;
const len = content.length;

// Track whether we're inside a template literal for a: or a_en: fields
let inTemplate = false;
let depth = 0; // track nested ${} if any

while (i < len) {
  const ch = content[i];

  if (!inTemplate) {
    // Look for a: ` or a_en: ` pattern to enter template literal
    // Check if current position matches  a: ` or a_en: `
    const remaining = content.substring(i, i + 10);
    const aMatch = remaining.match(/^(a|a_en):\s*`/);
    if (aMatch) {
      // Found start of template literal field
      const matchLen = aMatch[0].length;
      result += content.substring(i, i + matchLen);
      i += matchLen;
      inTemplate = true;
      continue;
    }
    result += ch;
    i++;
  } else {
    // Inside template literal
    if (ch === '\\' && i + 1 < len) {
      // Already escaped - pass through
      result += ch + content[i + 1];
      i += 2;
      continue;
    }

    if (ch === '`') {
      // Is this a closing backtick or an inline code backtick?
      // Look ahead: if followed by , or } or whitespace+field or end — it's closing
      const after = content.substring(i + 1, i + 20).trimStart();
      const isClosing = /^[,}]/.test(after) ||
                         /^q_en:/.test(after) ||
                         /^a_en:/.test(after) ||
                         /^q:/.test(after) ||
                         i + 1 >= len;

      if (isClosing) {
        // Closing backtick
        result += '`';
        i++;
        inTemplate = false;
        continue;
      }

      // This is an inline code backtick - find the matching closing backtick
      const closeIdx = content.indexOf('`', i + 1);
      if (closeIdx !== -1 && closeIdx - i < 200) {
        // Check that the closing backtick is NOT a template closer
        const afterClose = content.substring(closeIdx + 1, closeIdx + 20).trimStart();
        const closeIsTemplateEnd = /^[,}]/.test(afterClose) ||
                                    /^q_en:/.test(afterClose) ||
                                    /^a_en:/.test(afterClose) ||
                                    /^q:/.test(afterClose);

        if (!closeIsTemplateEnd) {
          // Both backticks are inline code markers - escape them
          const inlineContent = content.substring(i + 1, closeIdx);
          result += '\\`' + inlineContent + '\\`';
          i = closeIdx + 1;
          continue;
        }
      }

      // Fallback: treat as closing backtick
      result += '`';
      i++;
      inTemplate = false;
      continue;
    }

    result += ch;
    i++;
  }
}

writeFileSync(filePath, result);

// Verify by counting template literal issues
const lines = result.split('\n');
console.log(`Processed ${lines.length} lines in ${filePath}`);
