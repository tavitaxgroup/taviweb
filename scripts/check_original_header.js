const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

// Header HTML
const headerMatch = html.match(/<header[\s\S]*?<\/header>/i);
if (headerMatch) {
  console.log('HEADER FOUND:\n', headerMatch[0].substring(0, 3000));
} else {
  // maybe nav or div with class header
  const navMatch = html.match(/<(?:nav|div)[^>]*class="[^"]*(?:header|navbar)[^"]*"[\s\S]*?<\/(?:nav|div)>/i);
  console.log('NAV/HEADER DIV:', navMatch ? navMatch[0].substring(0, 3000) : 'none');
}
