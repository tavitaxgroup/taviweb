const fs = require('fs');

const html = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const regex = /class=[\"'][^\"']*\bwow\b[^\"']*[\"']/gi;
let m;
let count = 0;
console.log('=== WOW elements in HTML ===');
while ((m = regex.exec(html)) !== null && count < 25) {
  count++;
  const start = Math.max(0, m.index - 50);
  const end = Math.min(html.length, m.index + 150);
  console.log(`${count}: ${html.substring(start, end).replace(/\s+/g, ' ')}`);
}
console.log('Total wow elements found:', count);
