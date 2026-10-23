const fs = require('fs');

const p2633 = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/post-2633.css', 'utf8');

function findId(id) {
  const regex = new RegExp(`[^{}]*${id}[^{}]*\\{[^}]*\\}`, 'gi');
  let m;
  console.log(`=== Matches for ${id} ===`);
  while ((m = regex.exec(p2633)) !== null) {
    console.log(m[0].replace(/\s+/g, ' '));
  }
}

findId('1050a71f');
findId('7a52df0');
