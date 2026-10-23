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
  
  // Scroll down smoothly through page to trigger all reveal observers
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 300;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 50);
    });
  });

  await new Promise(r => setTimeout(r, 600));

  const sections = ['#hero', '#about', '#services', '#portfolio', '#team', '#before-after', '#articles', '#contact'];
  for (const s of sections) {
    const el = await page.$(s);
    if (el) {
      await el.screenshot({ path: 'revealed_' + s.replace('#', '') + '.png' });
      console.log('Saved revealed_' + s.replace('#', '') + '.png');
    }
  }
  await browser.close();
})();
