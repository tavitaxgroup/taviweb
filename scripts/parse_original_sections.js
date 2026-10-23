const fs = require('fs');
const html = fs.readFileSync('d:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html', 'utf8');

// Find all top sections
const regex = /<section class="[^"]*elementor-top-section[^"]*"[^>]*>([\s\S]*?)(?=<section class="[^"]*elementor-top-section|<\/body|$)/g;
let match;
let idx = 0;
while ((match = regex.exec(html)) !== null) {
  const s = match[1];
  const headings = (s.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  const subs = (s.match(/<span[^>]*class="[^"]*(?:sub-title|extra-title|title)[^"]*"[^>]*>([\s\S]*?)<\/span>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
  console.log(`Section ${idx}:`, { headings: headings.slice(0, 5), subs: subs.slice(0, 3) });
  idx++;
}
