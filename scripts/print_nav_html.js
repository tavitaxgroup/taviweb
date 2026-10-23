const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const navStart = html.indexOf('<nav class="header');
if (navStart !== -1) {
  console.log(html.substring(navStart, navStart + 4000));
}
