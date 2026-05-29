#!/usr/bin/env node
/**
 * Captura screenshot de uma seção específica (scroll até ela e tira foto).
 * Uso: node scripts/screenshot-section.mjs [path] [scroll-y] [viewport]
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const VIEWPORTS = {
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true },
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false },
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', '.visual-check');

const [, , pathArg = '/portal-niver', scrollY = '900', viewportArg = 'mobile'] = process.argv;
const viewport = VIEWPORTS[viewportArg] || VIEWPORTS.mobile;
const baseUrl = process.env.BASE_URL || 'http://localhost:5174';
const url = `${baseUrl}${pathArg}`;

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: viewport.width, height: viewport.height },
  deviceScaleFactor: viewport.deviceScaleFactor,
  isMobile: viewport.isMobile,
  hasTouch: viewport.isMobile,
  reducedMotion: 'reduce',
});

const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
await page.evaluate(() => document.fonts.ready);
await page.evaluate((y) => window.scrollTo(0, parseInt(y)), scrollY);
await page.waitForTimeout(500);

const slug = pathArg.replace(/[/]/g, '-').replace(/^-/, '');
const out = join(outputDir, `${slug}-${viewportArg}-y${scrollY}.png`);
await page.screenshot({ path: out, fullPage: false });
console.log(`📸 ${out}`);

await browser.close();
