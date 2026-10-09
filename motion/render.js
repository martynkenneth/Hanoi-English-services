const { chromium } = require('playwright');
const fs = require('fs');
(async () => {
  const out = process.argv[2], fps = 25;
  fs.mkdirSync(out, { recursive: true });
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1280, height: 720 } });
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.goto('file://' + __dirname + '/motion.html');
  await p.evaluate(() => document.fonts.ready);
  const total = await p.evaluate(() => window.TOTAL);
  const n = Math.round(total * fps);
  const only = process.argv[3] ? process.argv[3].split(',').map(Number) : null;
  for (let f = 0; f < n; f++) {
    if (only && !only.includes(f)) continue;
    await p.evaluate(t => window.setTime(t), f / fps);
    await p.screenshot({ path: `${out}/f${String(f).padStart(5, '0')}.png` });
  }
  console.log('frames', n, 'total s', total);
  await b.close();
})();
