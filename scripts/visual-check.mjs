#!/usr/bin/env node
/**
 * Visual check com Playwright — tira screenshots das LPs em viewports comuns.
 * Uso: node scripts/visual-check.mjs [url-path] [viewport]
 *   url-path: /niver-samuel | /portal-niver (default: /niver-samuel)
 *   viewport: mobile | tablet | desktop (default: mobile)
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const VIEWPORTS = {
  mobile: { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true }, // iPhone 14
  tablet: { width: 768, height: 1024, deviceScaleFactor: 2, isMobile: false }, // iPad
  desktop: { width: 1440, height: 900, deviceScaleFactor: 1, isMobile: false },
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', '.visual-check');

const [, , pathArg = '/niver-samuel', viewportArg = 'mobile'] = process.argv;
const viewport = VIEWPORTS[viewportArg] || VIEWPORTS.mobile;
const baseUrl = process.env.BASE_URL || 'http://localhost:5174';
const url = `${baseUrl}${pathArg}`;

await mkdir(outputDir, { recursive: true });

console.log(`📸 Capturing ${url} @ ${viewportArg} (${viewport.width}x${viewport.height})...`);

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: viewport.width, height: viewport.height },
  deviceScaleFactor: viewport.deviceScaleFactor,
  isMobile: viewport.isMobile,
  hasTouch: viewport.isMobile,
  userAgent: viewport.isMobile
    ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1'
    : undefined,
  reducedMotion: 'reduce', // Snapshots determinísticos
});

const page = await context.newPage();
await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });

// Aguarda fontes carregarem
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);

// Screenshot above-the-fold (apenas viewport)
const slug = pathArg.replace(/[/]/g, '-').replace(/^-/, '');
const aboveFoldPath = join(outputDir, `${slug}-${viewportArg}-fold.png`);
await page.screenshot({ path: aboveFoldPath, fullPage: false });
console.log(`  ✓ Above-the-fold: ${aboveFoldPath}`);

// Screenshot full page (scroll completo)
const fullPath = join(outputDir, `${slug}-${viewportArg}-full.png`);
await page.screenshot({ path: fullPath, fullPage: true });
console.log(`  ✓ Full page: ${fullPath}`);

// Coleta dimensões reais da hero pra debug (tudo tolerante a missing)
const safe = (locator) =>
  locator
    .first()
    .boundingBox({ timeout: 2000 })
    .catch(() => null);

const heroBox = await safe(page.locator('#hero, [aria-labelledby="thank-you-title"], section').first());
const h1Box = await safe(page.locator('h1'));
const primaryCta = await safe(page.locator('[data-cta]').first());

console.log('\n📐 Layout metrics:');
if (heroBox) console.log(`  Hero/first section: ${heroBox.height?.toFixed(0)}px tall`);
if (h1Box) console.log(`  H1 top: ${h1Box.y?.toFixed(0)}px from top`);
if (primaryCta) {
  console.log(`  CTA top: ${primaryCta.y?.toFixed(0)}px (viewport: ${viewport.height}px)`);
  console.log(`  CTA above fold: ${primaryCta.y < viewport.height ? '✅' : '❌'}`);
}

await browser.close();
console.log('\n✨ Done.');
