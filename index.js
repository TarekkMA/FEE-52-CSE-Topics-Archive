//@ts-check
const puppeteer = require("puppeteer-core");
const utils = require("./utils");
const fs = require("fs");
const scrapper = require("./topics-scrapper");

const fsp = fs.promises;

const windowWidth = 1366;
const windowHeight = 768;

const browserExecutablePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const cookiesPath = "./cookies.json";

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: browserExecutablePath,
      headless: false,
      args: [`--window-size=${windowWidth},${windowHeight}`]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: windowWidth, height: windowHeight });
    await restoreCookies(page);

    await scrapper(page);

    await utils.delay(5000);
    await saveCookies(page);
    await browser.close();
  } catch (error) {
    console.error(error);
  }
})();

async function saveCookies(page) {
  const cookies = await page.cookies();
  await fsp.writeFile(cookiesPath, JSON.stringify(cookies, null, 2));
}

async function restoreCookies(page) {
  if (await fileExist(cookiesPath)) {
    const cookiesString = await (await fsp.readFile(cookiesPath)).toString();
    const cookies = JSON.parse(cookiesString);
    await page.setCookie(...cookies);
  }
}

function fileExist(filePath) {
  return new Promise((resolve, reject) => {
    fs.exists(filePath, exists => {
      resolve(exists);
    });
  });
}
