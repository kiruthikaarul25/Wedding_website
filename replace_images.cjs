const fs = require('fs');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Background
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/d\/dd\/A_fancy_Indian_wedding_taking_place_in_Puducherry%2C_Tamil_Nadu%2C_India\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Muslim_wedding_in_India.jpg');
  
  // Hero portrait / Gallery 1
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/0\/0a\/KanyaDaan\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Bride_signing_marriage_papers.jpg');
  
  // Gallery 2
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/1\/18\/Typical_Indian_Wedding_Decorations\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Fish_Holud.jpg');
  
  // Gallery 3
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/3\/39\/Kanyadan_in_hindu_wedding\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/3/36/Bride_at_Nikah.jpg');
  
  // Gallery 4
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/6\/68\/Hindu_wedding_ceremony_fire\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/c/c0/A_Muslim_groom_ready_for_Nikah.jpg');
  
  // Gallery 5
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/8\/8a\/Indian_wedding\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Signing_the_Nikah.jpg');

  // Gallery 6 & Video
  content = content.replace(/https:\/\/upload\.wikimedia\.org\/wikipedia\/commons\/6\/69\/%28A%29_Hindu_wedding%2C_Saptapadi_ritual_before_Agni_Yajna\.jpg/g, 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Nikah_%28Marriage_in_Islam%29.jpg');

  // Unsplash couple hands
  content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1583939411023-14783179e581\?auto=format&fit=crop&q=80&w=800/g, 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Nikah_%28Marriage_in_Islam%29.jpg');

  fs.writeFileSync(filePath, content, 'utf8');
}

replaceInFile('src/App.tsx');
replaceInFile('src/components/IntroGate.tsx');
replaceInFile('src/components/Hero.tsx');
replaceInFile('src/components/Gallery.tsx');
replaceInFile('src/components/Videos.tsx');

