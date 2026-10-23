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
  
  // Hero screenshot
  await page.screenshot({ path: 'vi_hero_1257.png' });
  console.log('Saved vi_hero_1257.png');

  // Smooth scroll through entire page
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 350;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 40);
    });
  });

  await new Promise(r => setTimeout(r, 600));

  // Capture individual sections
  const sections = ['#about', '#services', '#portfolio', '#team', '#before-after', '#articles', '#contact'];
  for (const s of sections) {
    const el = await page.$(s);
    if (el) {
      await el.screenshot({ path: 'vi_' + s.replace('#', '') + '.png' });
      console.log('Saved vi_' + s.replace('#', '') + '.png');
    }
  }

  // Also capture footer
  const footer = await page.$('footer');
  if (footer) {
    await footer.screenshot({ path: 'vi_footer.png' });
    console.log('Saved vi_footer.png');
  }

  await browser.close();
})();
