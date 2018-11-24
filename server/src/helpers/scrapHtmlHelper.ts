import * as URL from "url-parse";
import axios from "axios";
import * as cheerio from "cheerio";

export function getGroupNameFromLink(link: string) {
  const url = new URL(link);
  const hostnameWithoutWWW = url.hostname.replace(/^www./, "");
  return hostnameWithoutWWW;
}

export async function getPageInfo(link: string) {
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
