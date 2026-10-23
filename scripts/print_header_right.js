const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const navStart = html.indexOf('<nav class="header');
const navEnd = html.indexOf('</nav>', navStart);
console.log(html.substring(navEnd - 1000, navEnd + 100));
