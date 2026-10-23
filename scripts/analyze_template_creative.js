const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

console.log('Total HTML length:', html.length);

// Extract all top-level sections or elementor containers
const sectionRegex = /<section[\s\S]*?<\/section>/gi;
const matches = html.match(sectionRegex) || [];
console.log('Found sections count:', matches.length);

// Also look for headings h1, h2, h3, h4
const headingRegex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
let hm;
console.log('--- HEADINGS IN FILE ---');
while ((hm = headingRegex.exec(html)) !== null) {
  const cleanText = hm[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');
  if (cleanText) {
    console.log(`${hm[1]}: ${cleanText}`);
  }
}

// Let's also check data-elementor-type or header, footer, etc.
const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
console.log('Title:', titleMatch ? titleMatch[1] : 'N/A');
