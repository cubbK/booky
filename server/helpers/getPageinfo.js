const axios = require("axios");
const cheerio = require("cheerio");

async function getPageInfo(link) {
  try {
    const request = await axios.get(link);

    const $ = cheerio.load(request.data);

    const title = $("title").text();
    const iconHref = $("[rel=icon]").attr("href");
    return {
      title,
      iconHref
    };
  } catch (err) {
    return {
      err: "Error getting info"
    };
  }
}

module.exports = getPageInfo;
