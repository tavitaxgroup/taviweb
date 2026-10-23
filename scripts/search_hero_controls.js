const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

const s0 = html.indexOf('elementor-element-43614b9d');
const s1 = html.indexOf('elementor-element-3e277479');
const heroHtml = html.substring(s0, s1);

// Find all icons or links or controls in hero
console.log('Hero section length:', heroHtml.length);
const tags = heroHtml.match(/<(?:\w+)[^>]*class="[^"]*(?:control|bottom|social|scroll|arrow|slide|mouse|dot)[^"]*"[^>]*>/gi) || [];
console.log('Matching tags in hero:', tags);
