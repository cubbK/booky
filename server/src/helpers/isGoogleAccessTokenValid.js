const { oauth2Client } = require("../googleClient");

async function isGoogleAccessTokenValid(accessToken) {
  console.log(accessToken);
  try {
    await oauth2Client.getTokenInfo(accessToken);
    return true;
  } catch (err) {
    console.log(err.message); 
    return false;
  }
}

module.exports = isGoogleAccessTokenValid;
