import * as URL from 'url-parse';

export function getGroupNameFromLink(link) {
  const url = new URL(link);
  const hostnameWithoutWWW = url.hostname.replace(/^www./, '');
  return hostnameWithoutWWW;
}
