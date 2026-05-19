#!/usr/bin/env node
/**
 * 卖家第二大脑 PDF Generator
 * Uses Chrome DevTools Protocol directly to generate PDF
 * with chapter navigation bookmarks (generateDocumentOutline).
 *
 * Two-pass approach for full-bleed cover:
 *   Pass 1 — cover page only, 0 margins → cover.pdf
 *   Pass 2 — content pages (no cover), normal margins → content.pdf
 *   Merge — cpdf cover.pdf content.pdf → final.pdf
 *
 * Usage: node scripts/generate-pdf.mjs
 */

import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { writeFileSync, unlinkSync, existsSync } from 'fs';
import { execSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

const HTML_PATH = resolve(ROOT, 'dist/seller-second-brain.html');
const PDF_PATH = resolve(ROOT, 'dist/seller-second-brain.pdf');
const COVER_PDF = resolve(ROOT, 'dist/_cover.pdf');
const CONTENT_PDF = resolve(ROOT, 'dist/_content.pdf');

async function generatePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  console.log(`Loading ${HTML_PATH}...`);
  await page.goto(`file://${HTML_PATH}`, {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Wait for JS enhancements
  await page.waitForFunction(() => {
    const h2s = document.querySelectorAll('h2.chapter-heading');
    return h2s.length > 0;
  }, { timeout: 5000 }).catch(() => {
    console.warn('Warning: Chapter heading enhancement may not have run.');
  });

  // Force light mode
  await page.emulateMediaFeatures([
    { name: 'prefers-color-scheme', value: 'light' }
  ]);

  const cdp = await page.createCDPSession();

  // ── Pass 1: Cover page only, zero margins (full-bleed) ──
  console.log('Pass 1: Generating full-bleed cover...');

  // Hide everything after the cover
  await page.evaluate(() => {
    const style = document.createElement('style');
    style.id = 'cover-only';
    style.textContent = `
      body > *:not(.book-cover) { display: none !important; }
      .book-cover {
        margin: 0 !important;
        min-height: 100vh !important;
        break-after: auto !important;
      }
    `;
    document.head.appendChild(style);
  });

  const coverResult = await cdp.send('Page.printToPDF', {
    landscape: false,
    displayHeaderFooter: false,
    printBackground: true,
    preferCSSPageSize: false,
    paperWidth: 8.27,
    paperHeight: 11.69,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    generateTaggedPDF: true,
    generateDocumentOutline: false
  });

  writeFileSync(COVER_PDF, Buffer.from(coverResult.data, 'base64'));
  console.log('  → cover.pdf saved');

  // ── Pass 2: Content pages (cover hidden), normal margins ──
  console.log('Pass 2: Generating content pages with margins...');

  // Remove cover-only style, add content-only style
  await page.evaluate(() => {
    const old = document.getElementById('cover-only');
    if (old) old.remove();

    const style = document.createElement('style');
    style.id = 'content-only';
    style.textContent = `
      .book-cover { display: none !important; }
    `;
    document.head.appendChild(style);
  });

  const contentResult = await cdp.send('Page.printToPDF', {
    landscape: false,
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 7.5pt; font-family: 'Inter', 'PingFang SC', sans-serif;
                  color: #8a8a92; width: 100%; text-align: center; padding: 0 25mm;">
        卖家第二大脑 — GBrain 实战笔记
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 8pt; font-family: 'Inter', 'PingFang SC', sans-serif;
                  color: #8a8a92; width: 100%; text-align: center; padding: 0 25mm;">
        <span class="pageNumber"></span>
      </div>
    `,
    printBackground: true,
    preferCSSPageSize: false,
    paperWidth: 8.27,
    paperHeight: 11.69,
    marginTop: 0.984,    // 25mm
    marginBottom: 0.984,
    marginLeft: 0.984,
    marginRight: 0.787,  // 20mm
    generateTaggedPDF: true,
    generateDocumentOutline: true
  });

  writeFileSync(CONTENT_PDF, Buffer.from(contentResult.data, 'base64'));
  console.log('  → content.pdf saved');

  await browser.close();

  // ── Merge: cover + content ──
  console.log('Merging cover + content...');
  try {
    execSync(
      `cpdf ${COVER_PDF} ${CONTENT_PDF} -o ${PDF_PATH}`,
      { cwd: ROOT, stdio: 'inherit' }
    );
  } catch (e) {
    // Fallback: try qpdf or just copy content if cpdf unavailable
    console.error('cpdf merge failed, trying fallback with qpdf...');
    try {
      execSync(
        `qpdf --empty --pages ${COVER_PDF} ${CONTENT_PDF} -- ${PDF_PATH}`,
        { cwd: ROOT, stdio: 'inherit' }
      );
    } catch (e2) {
      console.error('Both cpdf and qpdf failed. Using content PDF as final output.');
      const contentBuf = Buffer.from(contentResult.data, 'base64');
      writeFileSync(PDF_PATH, contentBuf);
    }
  }

  // Clean up temp files
  for (const f of [COVER_PDF, CONTENT_PDF]) {
    if (existsSync(f)) unlinkSync(f);
  }

  const { statSync } = await import('fs');
  const size = statSync(PDF_PATH).size;
  console.log(`\nPDF saved to ${PDF_PATH} (${(size / 1024 / 1024).toFixed(1)}MB)`);
}

generatePDF().catch(err => {
  console.error('PDF generation failed:', err);
  process.exit(1);
});
