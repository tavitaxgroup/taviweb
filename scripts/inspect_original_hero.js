const fs = require('fs');
const path = require('path');

const filePath = 'D:\\TavitaxGroup\\Project GitHub\\BuilderAgentWebsite\\template 15 ngành nghề\\xay-dung-3-template\\Creative – Architecture portfolio.html';

if (!fs.existsSync(filePath)) {
  console.log('File does not exist:', filePath);
  process.exit(1);
}

const html = fs.readFileSync(filePath, 'utf8');
console.log('Original HTML total length:', html.length);

// Let's find the main header and first section after header
const bodyIdx = html.indexOf('<body');
const bodyContent = html.slice(bodyIdx, bodyIdx + 15000);

// Let's extract navbar/header and slider/hero
const lines = bodyContent.split('\n');
console.log('First 120 lines of body:');
console.log(lines.slice(0, 120).join('\n'));
