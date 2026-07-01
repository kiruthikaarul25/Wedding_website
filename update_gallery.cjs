const fs = require('fs');

let content = fs.readFileSync('src/components/Gallery.tsx', 'utf8');

const newImports = `
import bgImage from '../assets/images/muslim_wedding_bg_1782884929580.jpg';
import handsImage from '../assets/images/muslim_wedding_hands_1782884947528.jpg';
import stageImage from '../assets/images/muslim_wedding_stage_1782884969461.jpg';
import nikahImage from '../assets/images/muslim_wedding_nikah_1782884989256.jpg';
import mosqueImage from '../assets/images/luxury_mosque_interior_1782885003878.jpg';
import haldiImage from '../assets/images/muslim_wedding_haldi_1782885022711.jpg';
`;

content = newImports + content;

content = content.replace(/const images = \[[\s\S]*?\];/, `const images = [
    bgImage,
    handsImage,
    stageImage,
    nikahImage,
    mosqueImage,
    haldiImage
  ];`);

fs.writeFileSync('src/components/Gallery.tsx', content, 'utf8');
