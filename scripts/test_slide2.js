const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1257, height: 720 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });
  
  // Click Next Slide button
  await page.click('button[aria-label="Next Slide"]');
  await new Promise(r => setTimeout(r, 1200));

  await page.screenshot({ path: 'slide2_render.png' });
  console.log('Saved slide2_render.png');
  await browser.close();
})();
