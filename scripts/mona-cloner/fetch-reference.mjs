#!/usr/bin/env node
/**
 * Mona Template Cloner - Step 1 & 2: Enter Template & Capture Original Reference
 * Usage:
 *   node scripts/mona-cloner/fetch-reference.mjs <slug> <referenceImageUrl> [liveUrl]
 */
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const [, , slug, referenceImageUrl, liveUrl] = process.argv;

if (!slug || !referenceImageUrl) {
  console.error(
    "Usage: node scripts/mona-cloner/fetch-reference.mjs <slug> <referenceImageUrl> [liveUrl]"
  );
  process.exit(1);
}

const outDir = path.resolve(process.cwd(), "public", "templates", slug);
fs.mkdirSync(outDir, { recursive: true });

const ext = referenceImageUrl.toLowerCase().endsWith(".png") ? "png" : "jpg";
const refPath = path.join(outDir, `reference-original.${ext}`);

console.log(`[1/2] Downloading original full-page reference image to ${refPath}...`);
execFileSync("curl.exe", [
  "-4",
  "-k",
  "-s",
  "-L",
  "-A",
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  referenceImageUrl,
  "-o",
  refPath,
]);

const stat = fs.statSync(refPath);
console.log(`      Saved ${stat.size} bytes.`);

if (liveUrl) {
  try {
    console.log(`[2/2] Inspecting live URL ${liveUrl}...`);
    const html = execFileSync(
      "curl.exe",
      [
        "-4",
        "-k",
        "-s",
        "-L",
        "--max-time",
        "12",
        "-A",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        liveUrl,
      ],
      { encoding: "utf8", maxBuffer: 15 * 1024 * 1024 }
    );

    const headings = [...html.matchAll(/<h[1-4][^>]*>([\s\S]*?)<\/h[1-4]>/gi)]
      .map((m) => m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim())
      .filter(Boolean)
      .slice(0, 40);

    const images = [...html.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)]
      .map((m) => m[1])
      .filter((u) => /^https?:\/\//i.test(u))
      .slice(0, 50);

    const metaPath = path.join(outDir, "live-metadata.json");
    fs.writeFileSync(
      metaPath,
      JSON.stringify(
        {
          slug,
          referenceImageUrl,
          liveUrl,
          capturedAt: new Date().toISOString(),
          headings,
          images: [...new Set(images)],
        },
        null,
        2
      )
    );
    console.log(
      `      Extracted ${headings.length} headings and ${images.length} images to ${metaPath}`
    );
  } catch (err) {
    console.log(
      `      Live URL offline or unreachable (${err.message}); relying on full-page reference image.`
    );
  }
}
