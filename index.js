//@ts-check
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const fsp = fs.promises;

const windowWidth = 1980;
const windowHeight = 1080;

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
    await page.goto(
      "https://www.facebook.com/" //groups/2401660223266519/post_tags_list/"
    );

    await delay(60000 * 5);
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

function delay(time) {
  return new Promise(function(resolve) {
    setTimeout(resolve, time);
  });
}
