const fs = require('fs');
const path = require('path');

const base = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề';
console.log('Folders in base:');
try {
  const items = fs.readdirSync(base);
  items.forEach(it => {
    const full = path.join(base, it);
    const stat = fs.statSync(full);
    console.log(stat.isDirectory() ? `[DIR] ${it}` : `[FILE] ${it}`);
  });
} catch(e) {
  console.log('Error:', e.message);
}
