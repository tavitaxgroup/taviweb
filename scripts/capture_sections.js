const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1257, height: 800 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });
  
  // Wait 1s for any animations
  await new Promise(r => setTimeout(r, 1000));

  const sections = ['#hero', '#about', '#services', '#portfolio', '#team', '#before-after', '#articles', '#contact'];
  for (const s of sections) {
    const el = await page.$(s);
    if (el) {
      await el.screenshot({ path: 'section_' + s.replace('#', '') + '.png' });
      console.log('Saved section_' + s.replace('#', '') + '.png');
    }
  }
  await browser.close();
})();
