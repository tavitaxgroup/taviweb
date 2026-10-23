const fs = require('fs');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files';
const s3 = fs.readFileSync(`${dir}/style(3).css`, 'utf8');

function printBlock(title, maxLen = 3000) {
  const idx = s3.indexOf(title);
  if (idx !== -1) {
    console.log(`\n=== BLOCK: ${title} ===`);
    console.log(s3.slice(idx, idx + maxLen));
  } else {
    console.log(`\nNot found: ${title}`);
  }
}

printBlock('[ * Showcase section ]');
printBlock('[ * Fancy Box section ]');
printBlock('[ * Infobox section ]');
