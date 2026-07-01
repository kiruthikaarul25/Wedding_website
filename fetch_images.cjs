const https = require('https');
https.get('https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Hindu_weddings&cmlimit=20&format=json', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const titles = JSON.parse(data).query.categorymembers.map(m => m.title).filter(t => t.startsWith('File:'));
    titles.forEach(title => {
      https.get(`https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(title)}&prop=imageinfo&iiprop=url&format=json`, (res2) => {
        let d2 = '';
        res2.on('data', c => d2 += c);
        res2.on('end', () => {
          const pages = JSON.parse(d2).query.pages;
          const url = Object.values(pages)[0].imageinfo[0].url;
          console.log(url);
        });
      });
    });
  });
});
