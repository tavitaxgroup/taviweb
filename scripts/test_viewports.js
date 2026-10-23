const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  
  const viewports = [
    { name: '1024_laptop', w: 1024, h: 768 },
    { name: '1440_desktop', w: 1440, h: 900 },
    { name: '1920_wide', w: 1920, h: 1080 },
    { name: '768_tablet', w: 768, h: 1024 },
    { name: '390_mobile', w: 390, h: 844 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.w, height: vp.h });
    await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });
    await page.screenshot({ path: `vp_${vp.name}.png` });
    console.log(`Saved vp_${vp.name}.png`);
  }

  await browser.close();
})();
