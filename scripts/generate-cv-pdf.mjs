// Genera public/cv/santiago-gomez-cv-{es,en}.pdf desde las páginas /cv y /en/cv.
// Requiere el sitio construido: npm run build && npm run cv
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'public', 'cv');
await mkdir(OUT, { recursive: true });

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

// Servidor estático mínimo sobre dist/
const server = createServer(async (req, res) => {
  try {
    let file = path.join(DIST, decodeURIComponent(new URL(req.url, 'http://x').pathname));
    const info = await stat(file).catch(() => null);
    if (!info || info.isDirectory()) file = path.join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': MIME[path.extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(4399, resolve));

const browser = await chromium.launch();
const page = await browser.newPage();

for (const lang of ['es', 'en']) {
  const url = `http://localhost:4399/${lang === 'es' ? 'cv' : 'en/cv'}`;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.pdf({
    path: path.join(OUT, `santiago-gomez-cv-${lang}.pdf`),
    format: 'A4',
    printBackground: true,
    margin: { top: '1.4cm', bottom: '1.4cm', left: '1.5cm', right: '1.5cm' },
  });
  console.log(`✓ santiago-gomez-cv-${lang}.pdf`);
}

await browser.close();
server.close();
