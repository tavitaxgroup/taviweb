const fs = require('fs');

const cssPath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files/style(2).css';
const css = fs.readFileSync(cssPath, 'utf8');

function searchCss(term) {
  console.log(`\n=== SEARCH: ${term} ===`);
  const regex = new RegExp(`[^{}]*${term}[^{}]*\\{[^}]*\\}`, 'gi');
  let m;
  let count = 0;
  while ((m = regex.exec(css)) !== null && count < 8) {
    count++;
    console.log(m[0].replace(/\s+/g, ' ').slice(0, 200));
  }
}

searchCss('stroke');
searchCss('twentytwenty');
searchCss('services');
searchCss('exp');
searchCss('portfolio');
searchCss('numbers');
