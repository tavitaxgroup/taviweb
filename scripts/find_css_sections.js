const fs = require('fs');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files';
const s2 = fs.readFileSync(`${dir}/style(2).css`, 'utf8');
const s3 = fs.readFileSync(`${dir}/style(3).css`, 'utf8');

function findHeaders(css, name) {
  console.log(`\n=== Section comments in ${name} ===`);
  const comments = css.match(/\/\*[\s\-]*\[[^\]]+\][\s\-]*\*\//gi) || [];
  comments.slice(0, 30).forEach(c => console.log('  ', c.replace(/\s+/g, ' ')));
}

findHeaders(s2, 'style(2).css');
findHeaders(s3, 'style(3).css');
