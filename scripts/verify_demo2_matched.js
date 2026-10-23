const puppeteer = require(require.resolve('puppeteer', { paths: ['d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/taviweb'] }));
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log('Navigating to http://localhost:3000/xay-dung-3 ...');
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));

  const outDir = 'C:/Users/Windows/.gemini/antigravity-ide/brain/99b054e3-98c8-42c2-979a-69cc7c6e427b';
  
  // Capture Top
  const topPath = path.join(outDir, 'demo2_matched_top.png');
  await page.screenshot({ path: topPath, fullPage: false });
  console.log('Saved top screenshot:', topPath);

  // Capture Full Page
  const fullPath = path.join(outDir, 'demo2_matched_full.png');
  await page.screenshot({ path: fullPath, fullPage: true });
  console.log('Saved full screenshot:', fullPath);

  // Update canonical preview in public/templates/
  const previewPath = 'd:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/taviweb/public/templates/XD003-bim.webp';
  await page.screenshot({ path: previewPath, fullPage: false });
  console.log('Updated canonical preview:', previewPath);

  // Copy to NT003-bim.webp as well
  const fs = require('fs');
  fs.copyFileSync(previewPath, 'd:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/taviweb/public/templates/NT003-bim.webp');
  console.log('Copied to NT003-bim.webp');

  // Verify all sections exist in DOM
  const sectionIds = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, header, footer')).map(el => ({
      tagName: el.tagName,
      id: el.id,
      heading: el.querySelector('h1, h2, h3')?.innerText?.replace(/\n/g, ' ') || 'N/A'
    }));
  });
  console.log('\nRendered sections:');
  console.log(JSON.stringify(sectionIds, null, 2));

  await browser.close();
})();
