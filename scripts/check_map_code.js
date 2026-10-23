const fs = require('fs');

const html = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

// Find map or iframe or Section 15
const idx = html.indexOf('google.com/maps') !== -1 ? html.indexOf('google.com/maps') : html.indexOf('<iframe');
if (idx !== -1) {
  console.log('Map snippet:');
  console.log(html.slice(idx - 200, idx + 400));
} else {
  console.log('Map iframe not directly found, searching map in section 15');
  const sIdx = html.indexOf('Address');
  console.log(html.slice(sIdx, sIdx + 2000));
}
