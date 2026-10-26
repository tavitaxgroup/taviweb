#!/usr/bin/env node
/**
 * Mona Template Cloner - Step 4 & 6: Puppeteer Visual Capture & Render Verification
 * Usage:
 *   node scripts/mona-cloner/verify-and-capture.mjs <industryKey> <templateKey> <outputRelativePath> [baseUrl]
 * Example:
 *   node scripts/mona-cloner/verify-and-capture.mjs cong_ty_xay_dung xay_dung_3 public/assets/anh-template/xay-dung/XD003-live.webp
 */
import puppeteer from "puppeteer";
import path from "path";
import fs from "fs";

const [
  ,
  ,
  industryKey,
  templateKey,
  outputRelativePath,
  baseUrl = "http://localhost:3000",
] = process.argv;

if (!industryKey || !templateKey || !outputRelativePath) {
  console.error(
    "Usage: node scripts/mona-cloner/verify-and-capture.mjs <industryKey> <templateKey> <outputRelativePath> [baseUrl]"
  );
  process.exit(1);
}

const outPath = path.resolve(process.cwd(), outputRelativePath);
fs.mkdirSync(path.dirname(outPath), { recursive: true });

const demoUrl = `${baseUrl}/demo/mock-${industryKey}?template=${templateKey}`;
const leadInjectUrl = `${baseUrl}/demo/xay-dung-an-gia?template=${templateKey}`;

async function run() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

    const pageErrors = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    console.log(`[1/4] Opening canonical demo URL: ${demoUrl}`);
    const response = await page.goto(demoUrl, {
      waitUntil: "networkidle2",
      timeout: 45000,
    });

    if (!response || response.status() >= 400) {
      throw new Error(`HTTP status ${response?.status()} on ${demoUrl}`);
    }

    console.log(`[2/4] Scrolling through entire page to trigger lazy images...`);
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 450;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;
          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            window.scrollTo(0, 0);
            resolve();
          }
        }, 120);
      });
    });

    await new Promise((r) => setTimeout(r, 1200));

    // Check images
    const imgReport = await page.evaluate(() => {
      const imgs = Array.from(document.querySelectorAll("img"));
      const broken = imgs
        .filter((img) => !img.complete || img.naturalWidth === 0)
        .map((img) => img.src);
      return {
        total: imgs.length,
        brokenCount: broken.length,
        broken,
        pageHeight: document.body.scrollHeight,
      };
    });

    console.log(
      `      Total images: ${imgReport.total} | Broken: ${imgReport.brokenCount} | Page height: ${imgReport.pageHeight}px`
    );
    if (imgReport.brokenCount > 0) {
      console.warn(`      WARNING - Broken images:`, imgReport.broken);
    }

    console.log(`[3/4] Capturing full-page WebP screenshot to ${outPath}...`);
    await page.screenshot({
      path: outPath,
      fullPage: true,
      type: "webp",
      quality: 85,
    });

    // Also save a PNG copy in scratch for quick visual inspection if needed
    const pngCopyPath = outPath.replace(/\.webp$/i, ".png");
    await page.screenshot({
      path: pngCopyPath,
      fullPage: true,
      type: "png",
    });

    console.log(`[4/4] Verifying dynamic lead injection at: ${leadInjectUrl}`);
    await page.goto(leadInjectUrl, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    const leadCheck = await page.evaluate(() => {
      const text = document.body.innerText || "";
      return {
        hasAnGia: /AN GIA/i.test(text),
        hasPhone: /0938\s*123\s*456/.test(text),
      };
    });

    console.log(
      `      Lead injection check -> Name ('AN GIA'): ${leadCheck.hasAnGia}, Phone ('0938 123 456'): ${leadCheck.hasPhone}`
    );

    if (pageErrors.length > 0) {
      console.warn(`      Runtime page errors:`, pageErrors);
    }

    if (imgReport.brokenCount > 0 || !leadCheck.hasAnGia) {
      process.exitCode = 2;
    }
  } finally {
    await browser.close();
  }
}

run().catch((err) => {
  console.error("Verification failed:", err);
  process.exit(1);
});
