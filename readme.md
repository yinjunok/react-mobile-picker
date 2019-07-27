![截图](snapshot/snapshot.gif)

## 备忘 puppeteer 安装

1. 不自动下载 Chromium
```bash
npm install puppeteer --dev --ignore-scripts
```

2. 到 https://download-chromium.appspot.com/ 手动下载 chromium

3. 手动设置 chromium 位置
```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: './chromium/chrome.exe',
    headless: false
  });
  const page = await browser.newPage();
  await page.goto('http://music.163.com/');
  await page.screenshot({path: 'music.png'});
  browser.close();
})();
```

## TODO

- [x] 单元测试
- [ ] 使用文档. 
- [ ] 解决多级联动存在的问题
