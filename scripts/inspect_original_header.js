const fs = require('fs');

const filePath = 'D:\\TavitaxGroup\\Project GitHub\\BuilderAgentWebsite\\template 15 ngành nghề\\xay-dung-3-template\\Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

const menuWrapperIdx = html.indexOf('header-icon hidden-sm hidden-xs');
console.log(html.slice(menuWrapperIdx, menuWrapperIdx + 2000));
