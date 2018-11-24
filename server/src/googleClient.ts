const { google } = require("googleapis");
import { config } from "./config";

export const oauth2Client = new google.auth.OAuth2(
  config.GOOGLE_CLIENT_ID,
  config.GOOGLE_SECRET,
  "http://localhost:3000/googleRedirect/"
);

google.options({
  version: "v2",
  auth: oauth2Client
});

