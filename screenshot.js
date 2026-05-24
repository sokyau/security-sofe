const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.goto('https://security.sofe.group/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'C:/Users/Jorge/.gemini/antigravity/brain/5689cf71-20ea-4796-9615-c4f01674db5e/screenshot.png', fullPage: true });
  await browser.close();
  console.log("Screenshot taken!");
})();
