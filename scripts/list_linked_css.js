const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

const linkRegex = /<link[^>]*rel=[\"']stylesheet[\"'][^>]*href=[\"']([^\"']*)[\"'][^>]*>/gi;
let lm;
const links = [];
while ((lm = linkRegex.exec(html)) !== null) {
  links.push(lm[1]);
}
console.log('Total stylesheets linked:', links.length);
links.forEach(l => console.log('Link:', l.split('/').pop()));
