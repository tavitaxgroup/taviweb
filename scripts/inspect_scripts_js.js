const fs = require('fs');

const path = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/scripts.js.download';
if (fs.existsSync(path)) {
  const content = fs.readFileSync(path, 'utf8');
  console.log('scripts.js length:', content.length);
  // find scroll, wow, hover, animation
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (/scroll|hover|wow|animat|fadeIn|offset|transform/i.test(l)) {
      console.log(`Line ${i + 1}: ${l.trim().slice(0, 150)}`);
    }
  });
} else {
  console.log('scripts.js.download not found');
}
