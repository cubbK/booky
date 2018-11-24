const { google } = require("googleapis");

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_SECRET,
  "http://localhost:3000/googleRedirect/"
);

google.options({
  version: "v2",
  auth: oauth2Client
});

exports.oauth2Client = oauth2Client;
