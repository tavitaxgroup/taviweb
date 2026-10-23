const fs = require('fs');

const html = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const regex = /data-settings=[\"']([^\"']*)[\"']/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  const decoded = m[1].replace(/&quot;/g, '"');
  if (/animation/i.test(decoded)) {
    console.log('Animation setting:', decoded);
  }
}
