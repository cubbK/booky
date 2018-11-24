var URL = require("url-parse");

function getGroupNameFromLink(link) {
  const url = new URL(link);
  const hostnameWithoutWWW = url.hostname.replace(/^www./, "");
  return hostnameWithoutWWW;
}

module.exports = getGroupNameFromLink;
