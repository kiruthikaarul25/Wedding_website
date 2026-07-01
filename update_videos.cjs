const fs = require('fs');

let content = fs.readFileSync('src/components/Videos.tsx', 'utf8');

const newImports = `
import haldiImage from '../assets/images/muslim_wedding_haldi_1782885022711.jpg';
import nikahImage from '../assets/images/muslim_wedding_nikah_1782884989256.jpg';
import stageImage from '../assets/images/muslim_wedding_stage_1782884969461.jpg';
import handsImage from '../assets/images/muslim_wedding_hands_1782884947528.jpg';
`;

content = newImports + content;

content = content.replace(/const videos = \[[\s\S]*?\];/, `const videos = [
    { id: 1, title: "Pre-wedding Holud", thumb: haldiImage, prompt: "Cinematic shot of Haldi/Holud ceremony preparations, vibrant yellow colors, festive atmosphere, 4k, slow motion" },
    { id: 2, title: "Signing the Nikah", thumb: nikahImage, prompt: "Muslim bride signing the marriage contract, elegant traditional dress, golden hour lighting, cinematic glide shot" },
    { id: 3, title: "Wedding Venue", thumb: stageImage, prompt: "Breathtaking drone shot of a beautifully decorated outdoor Muslim wedding venue in India, epic scale" },
    { id: 4, title: "The Nikah Ceremony", thumb: handsImage, prompt: "Close up of couple's hands during Nikah ceremony, traditional Muslim wedding, emotional, soft focus background" }
  ];`);

fs.writeFileSync('src/components/Videos.tsx', content, 'utf8');
