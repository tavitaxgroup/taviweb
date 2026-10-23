const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1257, height: 750 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });

  const sections = ['#hero', '#about', '#services', '#portfolio', '#team', '#before-after', '#articles', '#contact', 'footer'];
  for (const s of sections) {
    await page.evaluate((sel) => {
      document.querySelector(sel)?.scrollIntoView({ behavior: 'auto' });
    }, s);
    await new Promise(r => setTimeout(r, 700));
    await page.screenshot({ path: 'natural_' + s.replace(/[^a-z0-9]/gi, '_') + '.png' });
    console.log('Saved natural_' + s);
  }

  await browser.close();
})();
