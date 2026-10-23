const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle0' });

  // List all visible sections by tag or id or class
  const sections = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('section, header, footer')).map((el, idx) => ({
      index: idx + 1,
      tagName: el.tagName,
      id: el.id,
      className: el.className,
      textPreview: el.innerText.trim().slice(0, 100).replace(/\n/g, ' ')
    }));
  });

  console.log('Current rendered sections:');
  console.log(JSON.stringify(sections, null, 2));

  await browser.close();
})();
