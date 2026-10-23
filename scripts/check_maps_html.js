const fs = require('fs');

const p = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/maps.html';
if (fs.existsSync(p)) {
  console.log('maps.html content:');
  console.log(fs.readFileSync(p, 'utf8').slice(0, 1000));
} else {
  console.log('maps.html not found');
}
