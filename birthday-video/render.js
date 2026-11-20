// Usage: node render.js out_dir [fps] [times comma-separated for stills]
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
(async () => {
  const out = process.argv[2], fps = +(process.argv[3] || 30), stills = process.argv[4];
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ args: ['--no-sandbox'] });
  const pg = await b.newPage({ viewport: { width: 720, height: 1280 }, deviceScaleFactor: 1 });
  await pg.goto('file://' + path.resolve(__dirname, 'index.html') + '?rec');
  await pg.evaluate(() => document.fonts.ready);
  const grab = async (t, file) => {
    const d = await pg.evaluate(t => { renderAt(t); return document.getElementById('c').toDataURL('image/png'); }, t);
    fs.writeFileSync(file, Buffer.from(d.split(',')[1], 'base64'));
  };
  if (stills) {
    for (const t of stills.split(',').map(Number)) await grab(t, path.join(out, `s_${t}.png`));
  } else {
    const dur = await pg.evaluate(() => DUR), n = Math.round(dur * fps);
    for (let i = 0; i < n; i++) await grab(i / fps, path.join(out, `f_${String(i).padStart(4, '0')}.png`));
  }
  await b.close();
})();
