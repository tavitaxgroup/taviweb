const fs = require('fs');

const p = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/style.css';
if (fs.existsSync(p)) {
  const css = fs.readFileSync(p, 'utf8');
  console.log('style.css length:', css.length);
  // find theme header
  console.log('Header:', css.slice(0, 500));
}
