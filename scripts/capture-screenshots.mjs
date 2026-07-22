// Genera las portadas de los casos de estudio en src/assets/projects/<slug>/cover.png
// - Sitios vivos: screenshot real 1600x1000.
// - Proyectos sin deploy público: portada "blueprint" renderizada desde una plantilla HTML.
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const OUT = path.resolve(import.meta.dirname, '../src/assets/projects');
const VIEWPORT = { width: 1600, height: 1000 };

const LIVE = [
  { slug: 'hilong-lcr', url: 'https://thethreads.io' },
  { slug: 'lenguas-lia', url: 'https://lenguas.co' },
  { slug: 'contabio', url: 'https://contabio.pro' },
  { slug: 'cms-quicktipss', url: 'https://quicktipss.com' },
];

const GENERATED = [
  {
    slug: 'launchpro',
    title: 'LaunchPro',
    sub: 'AI campaign launcher',
    pipeline: ['brief', 'Claude · copy', 'Imagen 4 · visuals', 'Veo 3.1 · video', 'Tonic / Meta / TikTok'],
    accent: '#e0784a',
  },
  {
    slug: 'fanpage-ai-manager',
    title: 'Fanpage AI Manager',
    sub: 'AI-powered social publishing',
    pipeline: ['brand profile', 'Gemini · ideas + media', 'scheduler', 'Facebook / IG / TikTok'],
    accent: '#7aa7e0',
  },
];

const coverHtml = ({ title, sub, pipeline, accent }) => `<!doctype html>
<html><head><style>
  * { margin: 0; box-sizing: border-box; }
  body {
    width: 1600px; height: 1000px; overflow: hidden;
    background: #0c0e11; color: #e9eaec;
    font-family: 'Segoe UI', system-ui, sans-serif;
    display: flex; flex-direction: column; justify-content: space-between;
    padding: 90px 100px;
    background-image:
      linear-gradient(#262a31 1px, transparent 1px),
      linear-gradient(90deg, #262a31 1px, transparent 1px);
    background-size: 80px 80px;
  }
  .meta { font-family: Consolas, monospace; font-size: 26px; color: #9aa0a8; letter-spacing: 0.14em; }
  .meta b { color: ${accent}; font-weight: 500; }
  h1 { font-size: 150px; font-weight: 650; letter-spacing: -0.03em; line-height: 1; }
  h1 span { color: ${accent}; }
  .sub { margin-top: 26px; font-size: 44px; color: #9aa0a8; font-weight: 300; }
  .pipe { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; }
  .pipe .step {
    font-family: Consolas, monospace; font-size: 27px; color: #e9eaec;
    border: 2px solid #262a31; border-radius: 12px; padding: 18px 28px;
    background: rgba(20, 23, 28, 0.85);
  }
  .pipe .arrow { color: ${accent}; font-size: 30px; }
</style></head>
<body>
  <p class="meta"><b>~$</b> santiago gómez acero · case study</p>
  <div>
    <h1>${title}<span>.</span></h1>
    <p class="sub">${sub}</p>
  </div>
  <div class="pipe">
    ${pipeline.map((s) => `<span class="step">${s}</span>`).join('<span class="arrow">→</span>')}
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: 1.25 });

for (const { slug, url } of LIVE) {
  const dir = path.join(OUT, slug);
  await mkdir(dir, { recursive: true });
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: path.join(dir, 'cover.png') });
    console.log(`✓ ${slug} ← ${url}`);
  } catch (err) {
    console.error(`✗ ${slug}: ${err.message}`);
  }
}

for (const cover of GENERATED) {
  const dir = path.join(OUT, cover.slug);
  await mkdir(dir, { recursive: true });
  await page.setContent(coverHtml(cover), { waitUntil: 'load' });
  await page.screenshot({ path: path.join(dir, 'cover.png') });
  console.log(`✓ ${cover.slug} (generada)`);
}

await browser.close();
