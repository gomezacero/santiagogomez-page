// Capturas de QA visual del sitio construido → qa-screens/
import { chromium } from 'playwright';
import { mkdir, readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'qa-screens');
await mkdir(OUT, { recursive: true });

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
};

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
await new Promise((r) => server.listen(4398, r));

const shots = [
  { name: 'home-desktop-dark', url: '/', width: 1440, height: 2400, theme: 'dark' },
  { name: 'home-desktop-light', url: '/', width: 1440, height: 2400, theme: 'light' },
  { name: 'home-mobile-dark', url: '/', width: 390, height: 2200, theme: 'dark' },
  { name: 'case-launchpro-dark', url: '/proyectos/launchpro', width: 1440, height: 2400, theme: 'dark' },
  { name: 'home-en-desktop-dark', url: '/en/', width: 1440, height: 2400, theme: 'dark' },
  { name: 'cv-es', url: '/cv', width: 1200, height: 1800, theme: 'light' },
];

const browser = await chromium.launch();
for (const shot of shots) {
  const page = await browser.newPage({ viewport: { width: shot.width, height: shot.height } });
  await page.addInitScript((theme) => localStorage.setItem('theme', theme), shot.theme);
  await page.goto(`http://localhost:4398${shot.url}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: path.join(OUT, `${shot.name}.png`), fullPage: false });
  await page.close();
  console.log(`✓ ${shot.name}`);
}

await browser.close();
server.close();
