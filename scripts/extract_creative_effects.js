const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

// Find all CSS links and style tags
const styleMatches = html.match(/<style[^>]*>[\s\S]*?<\/style>/gi) || [];
console.log('Style tags count:', styleMatches.length);

// Check custom inline CSS in the HTML
const customCss = styleMatches.join('\n');
console.log('Custom CSS length:', customCss.length);

// Search for key words like: cursor, stroke, hover, transition, transform, keyframes
const keyframes = customCss.match(/@keyframes[\s\S]*?\{[\s\S]*?\}/gi) || [];
console.log('Keyframes count:', keyframes.length);

// Look for font-family
const fonts = new Set();
const fontRegex = /font-family\s*:\s*([^;\}]+)/gi;
let fm;
while ((fm = fontRegex.exec(customCss)) !== null) {
  fonts.add(fm[1].trim());
}
console.log('Fonts used in styles:', Array.from(fonts));

// Check any scripts or data attributes on sections
const dataAttrs = [];
const dataRegex = /data-[a-z0-9-]+="[^"]*"/gi;
let dm;
while ((dm = dataRegex.exec(html)) !== null) {
  const attr = dm[0].split('=')[0];
  if (!dataAttrs.includes(attr) && !attr.startsWith('data-elementor')) {
    dataAttrs.push(attr);
  }
}
console.log('Special data attributes:', dataAttrs);
