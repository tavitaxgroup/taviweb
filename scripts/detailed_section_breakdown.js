const fs = require('fs');

const filePath = 'D:/TavitaxGroup/Project GitHub/BuilderAgentWebsite/template 15 ngành nghề/xay-dung-3-template/Creative – Architecture portfolio.html';
const html = fs.readFileSync(filePath, 'utf8');

// Let's find all <section> elements and summarize each section
const sections = [];
const sectionRegex = /<section\b([^>]*)>([\s\S]*?)<\/section>/gi;
let match;
let index = 0;

while ((match = sectionRegex.exec(html)) !== null) {
  index++;
  const attrs = match[1];
  const content = match[2];
  
  // Extract classes
  const classMatch = attrs.match(/class=[\"']([^\"']*)[\"']/i);
  const classes = classMatch ? classMatch[1] : '';
  
  // Extract headings
  const headings = [];
  const hRegex = /<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/gi;
  let hm;
  while ((hm = hRegex.exec(content)) !== null) {
    headings.push(`${hm[1]}: ${hm[2].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ')}`);
  }
  
  // Extract any images
  const imgs = [];
  const imgRegex = /<img\b[^>]*src=[\"']([^\"']*)[\"'][^>]*>/gi;
  let im;
  while ((im = imgRegex.exec(content)) !== null) {
    imgs.push(im[1].split('/').pop());
  }

  // Snippet of text
  const textSnippet = content.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 150);

  console.log(`\n=== Section ${index} ===`);
  console.log(`Classes: ${classes.split(' ').filter(c => !c.startsWith('elementor-element-')).join(' ')}`);
  console.log(`Headings: ${headings.join(' | ')}`);
  console.log(`Images (${imgs.length}): ${imgs.slice(0, 5).join(', ')}`);
  console.log(`Snippet: ${textSnippet}`);
}
