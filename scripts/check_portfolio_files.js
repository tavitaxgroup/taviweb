const fs = require('fs');
const path = require('path');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio_files';
const files = fs.readdirSync(dir);
console.log('Total files in portfolio_files:', files.length);

const cssFiles = files.filter(f => f.endsWith('.css'));
const jsFiles = files.filter(f => f.endsWith('.js'));
const imgFiles = files.filter(f => /\.(png|jpe?g|webp|svg|gif)$/i.test(f));

console.log('CSS files count:', cssFiles.length);
cssFiles.forEach(f => console.log('  CSS:', f));

console.log('\nJS files count:', jsFiles.length);
jsFiles.forEach(f => console.log('  JS:', f));

console.log('\nImage files count:', imgFiles.length);
