// QA móvil/tablet del sitio construido: capturas + overflow + tap targets + menú + theme-color.
import { chromium } from 'playwright';
import { mkdir, readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DIST = path.join(ROOT, 'dist');
const OUT = path.join(ROOT, 'qa-screens', 'mobile');
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
const BASE = 'http://localhost:4398';

const WIDTHS = [360, 375, 390, 768, 1024];
const ROUTES = ['/', '/en/', '/cv', '/proyectos/launchpro'];
const browser = await chromium.launch();
const problems = [];

for (const width of WIDTHS) {
  for (const route of ROUTES) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
    await page.goto(BASE + route, { waitUntil: 'networkidle' });
    await page.waitForTimeout(400);

    // Overflow horizontal
    const overflow = await page.evaluate(() => {
      const doc = document.documentElement;
      const delta = doc.scrollWidth - doc.clientWidth;
      const bad =
        delta > 0
          ? [...document.querySelectorAll('*')]
              .filter((el) => el.getBoundingClientRect().right > doc.clientWidth + 1)
              .slice(0, 5)
              .map((el) => `${el.tagName}.${String(el.className).slice(0, 60)}`)
          : [];
      return { delta, bad };
    });
    if (overflow.delta > 0)
      problems.push(`OVERFLOW ${width}px ${route}: +${overflow.delta}px → ${overflow.bad.join(' | ')}`);

    // Tap targets (solo en móviles)
    if (width <= 390) {
      const small = await page.evaluate(() => {
        const out = [];
        for (const el of document.querySelectorAll('a, button')) {
          const r = el.getBoundingClientRect();
          if (r.width === 0 || r.height === 0) continue; // oculto
          if (el.closest('.case-prose, p')) continue; // enlaces inline de prosa exentos (WCAG 2.5.8)
          if (r.height < 43 || r.width < 24)
            out.push(`${el.tagName} "${(el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 30)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
        }
        return out.slice(0, 10);
      });
      if (small.length) problems.push(`TAP ${width}px ${route}: ${small.join(' | ')}`);
    }

    const slug = route.replaceAll('/', '_') || 'home';
    await page.screenshot({ path: path.join(OUT, `${width}${slug}.png`), fullPage: true });
    await page.close();
  }
}

// Menú móvil: abrir, capturar, navegar, asertar cierre
{
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.click('#nav-toggle');
  await page.waitForTimeout(200);
  const openState = await page.evaluate(() => ({
    hidden: document.getElementById('mobile-nav').hidden,
    expanded: document.getElementById('nav-toggle').getAttribute('aria-expanded'),
  }));
  await page.screenshot({ path: path.join(OUT, 'menu-open.png') });
  await page.click('#mobile-nav a');
  await page.waitForTimeout(300);
  const closedState = await page.evaluate(() => ({
    hidden: document.getElementById('mobile-nav').hidden,
    expanded: document.getElementById('nav-toggle').getAttribute('aria-expanded'),
  }));
  if (openState.hidden || openState.expanded !== 'true') problems.push(`MENU: no abre (${JSON.stringify(openState)})`);
  if (!closedState.hidden || closedState.expanded !== 'false')
    problems.push(`MENU: no cierra al navegar (${JSON.stringify(closedState)})`);

  // theme-color
  const themeColors = await page.evaluate(() => {
    const meta = document.querySelector('meta[name="theme-color"]');
    const dark = meta?.content;
    document.getElementById('theme-toggle').click();
    return { dark, light: meta?.content };
  });
  if (themeColors.dark !== '#0c0e11' || themeColors.light !== '#f7f4ee')
    problems.push(`THEME-COLOR: ${JSON.stringify(themeColors)}`);
  await page.close();
}

await browser.close();
server.close();

console.log(problems.length ? `PROBLEMAS (${problems.length}):\n` + problems.join('\n') : '✓ Sin problemas: overflow 0, tap targets OK, menú OK, theme-color OK');
