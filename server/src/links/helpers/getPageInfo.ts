import axios from 'axios';
import * as cheerio from 'cheerio';

export async function getPageInfo(link) {
  try {
    const request = await axios.get(link);

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
