const fs = require('fs');

const html = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const idx = html.indexOf('Tomas Kiel');
if (idx !== -1) {
  console.log('Snippet around Tomas Kiel:');
  console.log(html.slice(idx - 400, idx + 600));
}
