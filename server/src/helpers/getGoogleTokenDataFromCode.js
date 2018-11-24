const { oauth2Client } = require("../googleClient");

// expects ctx.request.header.code to exist
// decode the code and sets ctx.googleTokens with the decoded information
async function getGoogleTokenDataFromCode(code) {
  try {
    const { tokens } = await oauth2Client.getToken(code);

    return tokens;
  } catch (err) {
    console.log(err.toString());
    return err;
  }
}

module.exports = getGoogleTokenDataFromCode;
