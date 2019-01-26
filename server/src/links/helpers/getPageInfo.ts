import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getPageInfo(link) {
  try {
    const normalizedLink = normalizeLink(link);
    const request = await axios.get(normalizedLink);

    const $ = cheerio.load(request.data);

    const title = $('title').text();
    return {
      err: null,
      title,
    };
  } catch (err) {
    return {
      err: 'Error getting info',
      title: null,
    };
  }
}

function normalizeLink(link: string): string {
  if (link.includes('http://') || link.includes('https://')) {
    return link;
  } else {
    return 'http://' + link;
  }
}
