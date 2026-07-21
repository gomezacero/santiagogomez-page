// Uso: node scripts/shot-once.mjs <slug> <url> — captura una portada puntual.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const [slug, url] = process.argv.slice(2);
const dir = path.resolve(import.meta.dirname, '../src/assets/projects', slug);
await mkdir(dir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1.25 });
await page.goto(url, { waitUntil: 'load', timeout: 60000 });
await page.waitForTimeout(6000);
await page.screenshot({ path: path.join(dir, 'cover.png') });
await browser.close();
console.log(`✓ ${slug} ← ${url}`);
