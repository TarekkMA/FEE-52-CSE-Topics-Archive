//@ts-check
const puppeteer = require("puppeteer-core");
const utils = require("./utils");
const fsp = require("fs").promises;

/**
 *
 *
 * @param {puppeteer.Page} page
 */
module.exports = async function(page) {
  await page.goto(
    "https://www.facebook.com/groups/2401660223266519/post_tags_list/"
  );

  const topicsElements = await page.$$("._5aj7 ._4bl9._4yon");
  const topics = [];
  for (let i = 0; i < topicsElements.length; i++) {
    const e = topicsElements[i];
    const topicCount = parseInt(
      (await utils.getAttr(await e.$(".fsm.fwn.fcg"), "innerText"))
        .replace(" post")
        .replace("s")
    );
    const topicName = await utils.getAttr(await e.$("a"), "innerText");
    const topicLink = await utils.getAttr(await e.$("a"), "href");
    topics.push({
      count: topicCount,
      name: topicName,
      link: topicLink
    });
  }
  for (let i = 0; i < topics.length; i++) {
    const t = topics[i];
    console.log(t.name, t.count);
    await scrapTopic(page, t.link, t.count, t.name);
  }
};

/**
 *
 * @param {puppeteer.Page} page
 * @param {string} url
 * @param {number} count
 * @param {string} name
 */
async function scrapTopic(page, url, count, name) {
  let postsObjs = [];

  await page.goto(url);
  let items = await scrapeInfiniteScrollItems(page, extractPosts, count, 1000);
  console.log(items.length);

  const clickThemAll = await page.$$eval(
    "#fb_groups_post_tag_feed_stream_container .see_more_link_inner",
    // @ts-ignore will run in browser context
    links => links.map(link => link.click())
  );

  const posts = await page.$$(
    "#fb_groups_post_tag_feed_stream_container .userContentWrapper"
  );
  for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    await post.evaluate(e => e.scrollIntoView());

    const nameEl = await post.$(".fwb");
    const linkEl = await post.$(".fwb a");
    const dateEl = await post.$("abbr");
    const postEl = await post.$(".userContent");
    const postLink = await post.$("._5pcq");

    try {
      postsObjs.push({
        authorName: await utils.getAttr(nameEl, "innerText"),
        authorLink: linkEl
          ? (await utils.getAttr(linkEl, "href")).split("?")[0]
          : "",
        link: await utils.getAttr(postLink, "href"),
        date: await utils.getAttr(dateEl, "data-utime"),
        message: await utils.getAttr(postEl, "innerText")
      });
    } catch (e) {
      console.log(i);
      throw e;
    }
  }

  await fsp.writeFile(
    "topics/" + name + ".json",
    JSON.stringify(postsObjs, null, 2)
  );

  await utils.delay(1000);
}

/**
 * Will be evaluated inside the browser
 */
function extractPosts() {
  const extractedElements = document.querySelectorAll(
    "#fb_groups_post_tag_feed_stream_container ._4-u2"
  );
  const items = [];
  for (let element of extractedElements) {
    // @ts-ignore this should be fine in browser context
    items.push(element.innerText);
  }
  return items;
}

/**
 * Callback for extracting posts
 *
 * @callback extractItems
 * @return {Array[]} Array of extracted items
 */
/**
 *
 * @param {puppeteer.Page} page
 * @param {extractItems} extractItems function to extract items from page
 * @param {number} itemTargetCount The number to which the scrolling should stop
 * @param {number} scrollDelay Scroll delay in ms
 */
async function scrapeInfiniteScrollItems(
  page,
  extractItems,
  itemTargetCount,
  scrollDelay = 1000
) {
  let items = [];
  try {
    let previousHeight;
    while (items.length < itemTargetCount) {
      items = await page.evaluate(extractItems);
      previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      //   await page.waitForFunction(
      //     `document.body.scrollHeight > ${previousHeight}`
      //   );
      await page.waitFor(scrollDelay);
    }
  } catch (e) {}
  return items;
}

//#fb_groups_post_tag_feed_stream_container .see_more_link_inner
//#fb_groups_post_tag_feed_stream_container .uiMorePager .uiMorePagerLoader
