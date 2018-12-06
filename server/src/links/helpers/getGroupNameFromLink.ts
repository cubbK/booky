import * as normalizeUrl from 'normalize-url';
import * as URL from 'url-parse';

export function getGroupNameFromLink(link) {
  const normalizedUrl = normalizeUrl(link);
  const url = new URL(normalizedUrl);
  const hostnameWithoutWWW = url.hostname.replace(/^www./, '');
  return hostnameWithoutWWW;
}
