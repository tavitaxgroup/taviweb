const fs = require('fs');

const s2 = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/style(2).css', 'utf8');

const regex = /\.services[^{]*\{[^}]*\}/gi;
let m;
while ((m = regex.exec(s2)) !== null) {
  console.log(m[0].replace(/\s+/g, ' '));
}

console.log('\n--- .item-box ---');
const regex2 = /\.item-box[^{]*\{[^}]*\}/gi;
while ((m = regex2.exec(s2)) !== null) {
  console.log(m[0].replace(/\s+/g, ' '));
}

console.log('\n--- .feat ---');
const regex3 = /\.feat[^{]*\{[^}]*\}/gi;
let c = 0;
while ((m = regex3.exec(s2)) !== null && c < 5) {
  c++;
  console.log(m[0].replace(/\s+/g, ' '));
}
