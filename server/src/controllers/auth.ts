import * as Koa from "koa";
import * as Router from "koa-router";
import * as jwtDecode from "jwt-decode";
import * as jwt from "jsonwebtoken";
// const User = require("../models/user"); 


export const auth = new Router({
  prefix: "/auth"
});

// const getGoogleTokenDataFromCode = require("../helpers/getGoogleTokenDataFromCode.js");
// const isGoogleAccessTokenValid = require("../helpers/isGoogleAccessTokenValid");


interface Token extends Koa.Context {
  params: string
}

auth.post("/token", async (ctx: Token, next: Function) => {
  console.log(ctx);
  // try {
  //   const tokens = await getGoogleTokenDataFromCode(ctx.request.body.code);

  //   const refreshToken = tokens.refresh_token;
  //   const accessToken = tokens.access_token;

  //   const userInfo = jwtDecode(tokens.id_token);
  //   const userId = userInfo.sub;
  //   const userName = userInfo.given_name;

  //   const retrievedUser = await User.findOrCreateByGoogleId(userId);
  //   await User.setUserField(userId, "googleRefreshToken", refreshToken);

  //   console.log(retrievedUser);

  //   const responseObject = {
  //     userId: retrievedUser._id
  //   };

  //   const jwtResponse = jwt.sign(responseObject, process.env.JWT_TOKEN_SECRET);

  //   ctx.response.body = JSON.stringify(jwtResponse);
  // } catch (err) {
  //   console.log(err);
  //   ctx.throw(400, "Cannot get user");
  // }

  return next();
});

auth.post("/", async (ctx: Koa.Context, next: Function) => {
  // try {
  //   const userJWT = ctx.request.body.JWTString;

  //   const user = jwt.verify(userJWT, process.env.JWT_TOKEN_SECRET);

  //   const retrievedUser = await User.getUserByAccessToken(user.userId);
  //   ctx.response.body = JSON.stringify(retrievedUser);
  // } catch (err) {
  //   if (err.message === "jwt malformed") ctx.throw(400, "jwt malformed");
  //   ctx.throw(400, "Cannot get user");
  // }

  return next();
});
