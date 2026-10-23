const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  
  // User's laptop screen
  await page.setViewport({ width: 1257, height: 720 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'final_laptop_1257.png' });

  // Wide desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'final_desktop_1440.png' });

  console.log('Final screenshots saved successfully.');
  await browser.close();
})();
