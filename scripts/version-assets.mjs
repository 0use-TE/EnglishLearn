// Change each asset URL when its contents change. No dependencies required.
import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const index = path.join(dist, 'index.html');
const source = await readFile(index, 'utf8');
const references = [...source.matchAll(/\b(?:src|href)="([^"?#]+\.(?:js|css|svg|png))(?:\?[^"#]*)?"/g)];
let result = source;
for (const match of references) {
  const name = match[1];
  if (/^(?:https?:)?\/\//.test(name)) continue;
  const filename = path.resolve(dist, name);
  if (!filename.startsWith(dist)) throw new Error(`Asset outside dist: ${name}`);
  const hash = createHash('sha256').update(await readFile(filename)).digest('hex').slice(0, 12);
  result = result.replace(match[0], match[0].replace(/=".*"$/, `="${name}?v=${hash}"`));
}
if (result !== source) await writeFile(index, result);
console.log(`Versioned ${references.length} local assets.`);
