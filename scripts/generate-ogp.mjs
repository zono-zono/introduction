import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`file://${join(__dirname, '../assets/ogp-template.html')}`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1000); // wait for fonts
await page.screenshot({ path: join(__dirname, '../assets/ogp.jpg'), type: 'jpeg', quality: 95 });
await browser.close();
console.log('Generated: assets/ogp.jpg');
