import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join } from 'path';
const OUT = join(process.cwd(), 'logo-check');
mkdirSync(OUT, { recursive: true });
const browser = await chromium.launch();
for (const [name, w] of [['320', 320], ['375', 375], ['430', 430], ['768', 768], ['1280', 1280]]) {
  const page = await browser.newPage();
  await page.setViewportSize({ width: +w, height: 220 });
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  await page.screenshot({ path: join(OUT, `${name}.png`), fullPage: false });
  await page.close();
}
await browser.close();
console.log('done');
