const fs = require('fs');
const glob = require('glob'); // Need to use standard fs if no glob

const dir = 'src/components/';
const files = fs.readdirSync(dir).map(f => dir + f).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace backgrounds in sections and footers
  content = content.replace(/bg-dark-black/g, 'bg-transparent');
  content = content.replace(/bg-deep-maroon/g, 'bg-transparent');
  content = content.replace(/bg-texture/g, '');
  content = content.replace(/<div className="absolute inset-0 bg-black\/\d+"><\/div>\s*/g, '');

  // specific elements inside components shouldn't necessarily lose bg-dark-black if they are cards or badges.
  // Wait, I shouldn't replace *all* bg-dark-black globally in all components, because some might be on small UI elements (like cards, icons).
});
