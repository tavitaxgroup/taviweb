const fs = require('fs');

const p2633 = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/post-2633.css';
if (fs.existsSync(p2633)) {
  const css = fs.readFileSync(p2633, 'utf8');
  console.log('post-2633.css length:', css.length);
  // print first 1000 chars and any interesting selectors
  console.log('Sample:', css.slice(0, 1000));
} else {
  console.log('File not found');
}
