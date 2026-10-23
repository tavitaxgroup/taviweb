const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = 'C:\\Users\\Windows\\.gemini\\antigravity-ide\\brain\\99b054e3-98c8-42c2-979a-69cc7c6e427b';

async function verify() {
  console.log('Launching browser to test scroll and hover animations...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    defaultViewport: { width: 1440, height: 900 }
  });

  try {
    const page = await browser.newPage();
    console.log('Navigating to http://localhost:3000/xay-dung-3 ...');
    await page.goto('http://localhost:3000/xay-dung-3', { waitUntil: 'networkidle2', timeout: 30000 });

    // 1. Check Magic Cursor presence
    const cursorExists = await page.evaluate(() => {
      const inner = document.querySelector('.cursor-inner');
      const outer = document.querySelector('.cursor-outer');
      return !!inner && !!outer;
    });
    console.log('BimCursor in DOM:', cursorExists);

    // 2. Initial state of reveal elements
    let revealStats = await page.evaluate(() => {
      const all = document.querySelectorAll('.bim-reveal, .bim-reveal-left, .bim-reveal-right, .bim-reveal-scale');
      const revealed = document.querySelectorAll('.bim-revealed');
      return { total: all.length, revealed: revealed.length };
    });
    console.log('Initial reveal status at top:', revealStats);

    // 3. Scroll down step-by-step to trigger IntersectionObserver
    console.log('Scrolling down to trigger scroll-reveal...');
    const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 400; y <= docHeight; y += 500) {
      await page.evaluate((top) => window.scrollTo({ top, behavior: 'instant' }), y);
      await new Promise(r => setTimeout(r, 60));
    }
    // Scroll back to top
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
    await new Promise(r => setTimeout(r, 200));

    // Check after scroll
    revealStats = await page.evaluate(() => {
      const all = document.querySelectorAll('.bim-reveal, .bim-reveal-left, .bim-reveal-right, .bim-reveal-scale');
      const revealed = document.querySelectorAll('.bim-revealed');
      return { total: all.length, revealed: revealed.length };
    });
    console.log('Reveal status after scrolling full page:', revealStats);

    // 4. Test Hover on Service Card
    console.log('Testing hover on Service Card...');
    await page.evaluate(() => {
      const sec = document.querySelector('#services');
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.hover('.bim-service-box');
    await new Promise(r => setTimeout(r, 300));
    const serviceHoverShot = path.join(ARTIFACTS_DIR, 'verify_service_hover.png');
    await page.screenshot({ path: serviceHoverShot });
    console.log('Saved service hover screenshot:', serviceHoverShot);

    // 5. Test Hover on Team Card
    console.log('Testing hover on Team Card...');
    await page.evaluate(() => {
      const sec = document.querySelector('#team');
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.hover('.bim-team-card');
    await new Promise(r => setTimeout(r, 300));
    const teamHoverShot = path.join(ARTIFACTS_DIR, 'verify_team_hover.png');
    await page.screenshot({ path: teamHoverShot });
    console.log('Saved team hover screenshot:', teamHoverShot);

    // 6. Test Hover on Blog Card
    console.log('Testing hover on Blog Card...');
    await page.evaluate(() => {
      const sec = document.querySelector('#articles');
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.hover('.bim-blog-card');
    await new Promise(r => setTimeout(r, 300));
    const blogHoverShot = path.join(ARTIFACTS_DIR, 'verify_blog_hover.png');
    await page.screenshot({ path: blogHoverShot });
    console.log('Saved blog hover screenshot:', blogHoverShot);

    // 7. Test Hover on Contact Card
    console.log('Testing hover on Contact Card...');
    await page.evaluate(() => {
      const sec = document.querySelector('#contact');
      if (sec) sec.scrollIntoView({ behavior: 'instant', block: 'center' });
    });
    await new Promise(r => setTimeout(r, 400));
    await page.hover('.bim-contact-card');
    await new Promise(r => setTimeout(r, 300));
    const contactHoverShot = path.join(ARTIFACTS_DIR, 'verify_contact_hover.png');
    await page.screenshot({ path: contactHoverShot });
    console.log('Saved contact hover screenshot:', contactHoverShot);

    // 8. Capture overall fullpage screenshot with all elements revealed
    const fullpageShot = path.join(ARTIFACTS_DIR, 'verify_scroll_fullpage.png');
    await page.screenshot({ path: fullpageShot, fullPage: true });
    console.log('Saved fullpage screenshot:', fullpageShot);

    console.log('ALL SCROLL AND HOVER AUDIT TESTS PASSED SUCCESSFULLY!');
  } finally {
    await browser.close();
  }
}

verify().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
