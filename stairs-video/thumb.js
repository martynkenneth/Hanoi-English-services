const { chromium } = require('playwright'); const path=require('path'), fs=require('fs');
(async()=>{const b=await chromium.launch({args:['--no-sandbox']});const pg=await b.newPage({viewport:{width:720,height:1280}});
await pg.goto('file://'+path.resolve(__dirname,'index.html')+'?rec&thumb');await pg.evaluate(()=>document.fonts.ready);
await pg.evaluate(()=>renderThumb());
const d=await pg.evaluate(()=>document.getElementById('c').toDataURL('image/png'));
fs.writeFileSync(process.argv[2],Buffer.from(d.split(',')[1],'base64'));await b.close()})();
