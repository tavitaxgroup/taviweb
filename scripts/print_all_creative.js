const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

const regex = /creative/gi;
let m;
const list = [];
while ((m = regex.exec(html)) !== null) {
  const line = html.substring(Math.max(0, m.index - 80), Math.min(html.length, m.index + 80)).replace(/\s+/g, ' ');
  if (!line.includes('fa-creative-commons')) {
    list.push(line);
  }
}

console.log('Total non-icon creative mentions:', list.length);
list.forEach((item, idx) => console.log(`${idx + 1}: ${item}`));
