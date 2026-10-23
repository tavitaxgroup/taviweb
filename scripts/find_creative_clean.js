const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

// Find all occurrences of word 'creative' outside of fontawesome icon classes
const matches = [];
const lines = html.split('\n');
lines.forEach((line, lineNum) => {
  if (/creative/i.test(line) && !/fa-creative-commons/i.test(line)) {
    matches.push({ lineNum: lineNum + 1, text: line.trim().slice(0, 200) });
  }
});

console.log('Matches count:', matches.length);
matches.forEach(m => console.log(`Line ${m.lineNum}: ${m.text}`));
