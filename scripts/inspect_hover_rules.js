const fs = require('fs');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files';

function findHovers(filename) {
  const content = fs.readFileSync(`${dir}/${filename}`, 'utf8');
  console.log(`\n=== HOVER RULES IN ${filename} ===`);
  const regex = /([^{}]*:hover[^{}]*\{[^}]*\})/gi;
  let m;
  let count = 0;
  while ((m = regex.exec(content)) !== null) {
    const rule = m[1].replace(/\s+/g, ' ');
    if (/team|service|single-image-box|post|portfolio|item|card|blog|btn|button/i.test(rule) && count < 25) {
      count++;
      console.log(`${count}: ${rule.slice(0, 180)}`);
    }
  }
}

findHovers('post-2633.css');
findHovers('style(2).css');
findHovers('style(3).css');
