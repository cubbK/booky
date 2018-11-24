import { oauth2Client } from "../googleClient";

// expects ctx.request.header.code to exist
// decode the code and sets ctx.googleTokens with the decoded information
export async function getGoogleTokenDataFromCode(code: string) {
  try {
    const { tokens } = await oauth2Client.getToken(code);
    return tokens;
  } catch (err) {
    console.log(err.toString());
    return err;
  }
}


export async function isGoogleAccessTokenValid(accessToken: string) {
  try {
    await oauth2Client.getTokenInfo(accessToken);
    return true;
  } catch (err) {
    console.log(err.message); 
    return false;
  }
}