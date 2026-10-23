const fs = require('fs');

const s3 = fs.readFileSync('D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/style(3).css', 'utf8');

const idx = s3.indexOf('.better-single-image-box');
if (idx !== -1) {
  console.log(s3.slice(idx, idx + 2000));
} else {
  console.log('Not found in style(3).css');
}
