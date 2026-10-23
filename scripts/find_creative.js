const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

const regex = /creative/gi;
let match;
let count = 0;
while ((match = regex.exec(html)) !== null) {
  count++;
  const start = Math.max(0, match.index - 100);
  const end = Math.min(html.length, match.index + 100);
  console.log(`[${count}] ...${html.substring(start, end).replace(/\s+/g, ' ')}...`);
}
