const fs = require('fs');

const html = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

// Find where "Our Services" or "01 Architecture" appears
const idx = html.indexOf('01');
if (idx !== -1) {
  console.log('Snippet around 01:');
  console.log(html.slice(idx - 300, idx + 1200));
}
