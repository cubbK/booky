const mongoose = require("mongoose");
const { oauth2Client } = require("../googleClient");

const infoSchema = new mongoose.Schema({
  title: String,
  iconHref: String,
  err: String
});

const linkSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  groupName: String,
  isFavorite: Boolean,
  info: infoSchema
});

const userSchema = new mongoose.Schema({
  googleId: {
    type: String
  },
  googleRefreshToken: {
    type: String
  },
  links: [linkSchema]
});

const User = mongoose.model("User", userSchema);
exports.User = User;

exports.setUserField = (googleId: number, field: string, value: any) => {
  const fieldsToUpdate = { [field]: value };
  return User.updateOne({ googleId }, fieldsToUpdate, function(err: any, raw: any) {
    if (err) return err;
  }).exec();
};

// Every google account has a unique id which is sub field in decoded token
exports.findOrCreateByGoogleId = async (googleId: number) => {
  const user = await User.findOne({ googleId }).exec();

  if (user === null) {
    const newUser = await new User({
      googleId: googleId,
      googleRefreshToken: "",
      links: []
    }).save();

    return newUser;
  }

  return user;
};

exports.getUserByAccessToken = async (userId: number) => {
  const user = await User.findOne({ _id: userId }).exec();
  const refreshToken = user.googleRefreshToken;

  // Required shape for google auth client
  const tokens = {
    refresh_token: refreshToken
  };
  oauth2Client.setCredentials(tokens);
  await oauth2Client.refreshAccessToken();

  const newToken = oauth2Client.credentials.access_token;
  try {
    const tokenInfo = await oauth2Client.getTokenInfo(newToken);
    const googleId = tokenInfo.sub;

    const userByGoogleId = await User.findOne({ googleId }).exec();

    return {
      links: userByGoogleId.links
    };
  } catch (err) {
    console.log(err.message);
    return err;
  }

  // const tokenInfo = await oAuth2client.getTokenInfo('my-access-token');
};

const getPageInfo = require("../helpers/getPageinfo");
const getGroupNameFromLink = require("../helpers/getGroupNameFromLink");

exports.addLink = async (userId: number, link: string) => {
  const info = await getPageInfo(link);
  const groupName = getGroupNameFromLink(link);

  return User.findOneAndUpdate(
    { _id: userId },
    {
      $push: { links: { url: link, info, groupName, isFavorite: false } }
    },
    { new: true }
  ).exec();
};

exports.setLinkFavorite = async (userId: number, linkId: number, favoriteState: boolean) => {
  const user = await User.updateOne(
    { _id: userId, "links._id": linkId },
    { $set: { "links.$.isFavorite": favoriteState } }
  ).exec();
  return user;
};

exports.deleteLink = async (userId: number, linkId: number) => {
  const user = await User.findByIdAndUpdate(userId, {
    $pull: { links: { _id: linkId } }
  });
  return user;
};
