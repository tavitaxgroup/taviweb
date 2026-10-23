const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ 
    headless: 'new', 
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    args: ['--no-sandbox'] 
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1257, height: 750, deviceScaleFactor: 1.25 });
  await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2' });

  const metrics = await page.evaluate(() => {
    const link = document.querySelector('a[aria-label="Cuộn xuống"]');
    const pill = link?.querySelector('div');
    const dot = pill?.querySelector('div');
    
    const linkRect = link?.getBoundingClientRect();
    const pillRect = pill?.getBoundingClientRect();
    const dotRect = dot?.getBoundingClientRect();
    
    return {
      windowWidth: window.innerWidth,
      screenCenter: window.innerWidth / 2,
      linkCenter: linkRect ? linkRect.left + linkRect.width / 2 : null,
      diffFromScreenCenter: linkRect ? (linkRect.left + linkRect.width / 2) - (window.innerWidth / 2) : null,
      pill: {
        width: pillRect?.width,
        height: pillRect?.height,
        left: pillRect?.left,
        right: pillRect?.right,
        center: pillRect ? pillRect.left + pillRect.width / 2 : null,
      },
      dot: {
        width: dotRect?.width,
        height: dotRect?.height,
        left: dotRect?.left,
        right: dotRect?.right,
        center: dotRect ? dotRect.left + dotRect.width / 2 : null,
        offsetFromPillCenter: (pillRect && dotRect) ? (dotRect.left + dotRect.width / 2) - (pillRect.left + pillRect.width / 2) : null,
      }
    };
  });
  console.log('Metrics:', JSON.stringify(metrics, null, 2));

  // Take zoomed screenshot of the mouse indicator
  const el = await page.$('a[aria-label="Cuộn xuống"]');
  if (el) {
    await el.screenshot({ path: 'zoom_mouse_icon.png' });
    console.log('Saved zoom_mouse_icon.png');
  }

  await browser.close();
})();
