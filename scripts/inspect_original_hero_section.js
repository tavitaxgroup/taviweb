const fs = require('fs');

const filePath = 'D:\\TavitaxGroup\\Project GitHub\\BuilderAgentWebsite\\template 15 ngành nghề\\xay-dung-3-template\\Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

// Find the section that contains the slider
const m = 55402;
// Find opening <section or <div before m
const sectionStart = html.lastIndexOf('<section', m);
const sectionEnd = html.indexOf('</section>', m);

console.log('Section start:', sectionStart, 'Section end:', sectionEnd);
const secHtml = html.slice(sectionStart, sectionEnd + 10);
console.log('--- SECTION HTML (first 3500 chars) ---');
console.log(secHtml.slice(0, 3500));

console.log('--- SECTION HTML (next 3500 chars) ---');
console.log(secHtml.slice(3500, 7000));
