const fs = require('fs');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files';
const files = fs.readdirSync(dir).filter(f => f.startsWith('style'));

files.forEach(f => {
  const content = fs.readFileSync(`${dir}/${f}`, 'utf8');
  console.log(`File: ${f}, size: ${content.length}`);
  const lines = content.slice(0, 300).replace(/\n/g, ' ');
  console.log(`  Snippet: ${lines}\n`);
});
