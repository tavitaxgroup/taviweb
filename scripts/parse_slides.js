const fs = require('fs');

const filePath = 'D:\\TavitaxGroup\\Project GitHub\\BuilderAgentWebsite\\template 15 ngành nghề\\xay-dung-3-template\\Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

// Find all slides
const sliderPart = html.slice(html.indexOf('home-slider'), html.indexOf('</section>', html.indexOf('home-slider')));
const slides = sliderPart.split('<div class="item slide');

console.log('Slides split count:', slides.length - 1);

for (let i = 1; i < slides.length; i++) {
  const s = slides[i];
  const bgMatch = s.match(/background-image:\s*url\((.*?)\)/i);
  const titleMatch = s.match(/class="slider-title[\s\S]*?<\/h3>/i);
  const descMatch = s.match(/<p>([\s\S]*?)<\/p>/i);
  const btnMatch = s.match(/<a[^>]*class="[^"]*slider-btn[^"]*"[^>]*>([\s\S]*?)<\/a>/i);
  const isCloned = s.includes('slick-cloned');

  console.log(`\nSlide #${i} (cloned: ${isCloned}):`);
  console.log('  Image:', bgMatch ? bgMatch[1] : 'none');
  if (titleMatch) {
    const text = titleMatch[0].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
    console.log('  Title text:', text);
  }
  if (descMatch) {
    console.log('  Description:', descMatch[1].replace(/<[^>]+>/g, '').trim());
  }
  if (btnMatch) {
    console.log('  Button:', btnMatch[1].replace(/<[^>]+>/g, '').trim());
  }
}

// Check arrows, dots, and controls in the slider
console.log('\n--- Controls in sliderPart ---');
const arrowLeft = sliderPart.match(/<i[^>]*angle-left[^>]*>/i);
const arrowRight = sliderPart.match(/<i[^>]*angle-right[^>]*>/i);
const dots = sliderPart.match(/<ul[^>]*slick-dots[^>]*>[\s\S]*?<\/ul>/i);
console.log('Arrow Left:', arrowLeft ? arrowLeft[0] : 'none');
console.log('Arrow Right:', arrowRight ? arrowRight[0] : 'none');
console.log('Dots:', dots ? dots[0] : 'none');
