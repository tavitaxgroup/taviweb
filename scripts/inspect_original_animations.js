const fs = require('fs');

const dir = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template';
const html = fs.readFileSync(`${dir}/Creative – Architecture portfolio.html`, 'utf8');

console.log('=== 1. SCROLL ANIMATION ATTRIBUTES & CLASSES IN HTML ===');
// Search for wow, animated, data-wow, data-animation, etc.
const animationMatches = [];
const regex = /(class=[\"'][^\"']*(?:wow|animated|animate|fadeIn|fade|slide)[^\"']*[\"']|data-animation=[\"'][^\"']*[\"']|data-wow-delay=[\"'][^\"']*[\"'])/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  animationMatches.push(m[0]);
}
console.log('Found animation attributes count:', animationMatches.length);
animationMatches.slice(0, 30).forEach((attr, idx) => console.log(`${idx + 1}: ${attr}`));

console.log('\n=== 2. PARALLAX ATTRIBUTES IN HTML ===');
const parallaxMatches = [];
const pRegex = /(data-parallax|data-simpleparallax|parallaxie|simpleParallax)[^>\"']*/gi;
while ((m = pRegex.exec(html)) !== null) {
  parallaxMatches.push(m[0]);
}
console.log('Parallax matches count:', parallaxMatches.length);
parallaxMatches.slice(0, 20).forEach((p, idx) => console.log(`${idx + 1}: ${p}`));
