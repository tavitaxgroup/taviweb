const fs = require('fs');

const s2 = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/style(2).css', 'utf8');

const regex = /\.cursor[^{]*\{[^}]*\}/gi;
let m;
console.log('=== .cursor styles in style(2).css ===');
while ((m = regex.exec(s2)) !== null) {
  console.log(m[0].replace(/\s+/g, ' '));
}
