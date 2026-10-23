const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

// Search for mouse or scroll in original HTML
const matches = html.match(/[^\n]*(?:mouse|scroll-down|scroll_down)[^\n]*/gi);
console.log('Matches:', matches);
