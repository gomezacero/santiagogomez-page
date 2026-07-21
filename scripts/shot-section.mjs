// Uso: node scripts/shot-section.mjs <ruta-con-ancla> <salida.png> — captura una sección del sitio construido.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import path from 'node:path';

const [route = '/#ia', out = 'qa-screens/section.png'] = process.argv.slice(2);
const server = spawn(process.execPath, [path.join(import.meta.dirname, 'serve-dist.mjs'), '4177'], {
  stdio: 'ignore',
});
await new Promise((r) => setTimeout(r, 800));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1250 } });
await page.goto(`http://localhost:4177${route}`, { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: out });
await browser.close();
server.kill();
console.log(`✓ ${out}`);
