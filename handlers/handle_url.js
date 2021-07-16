const { createShortUrl } = require("../api");
const validUrl = require("valid-url");
const handleUrl = async (ctx) => {
  try {
    console.log("text++++++", ctx.message.text);
    if (!validUrl.isUri(ctx.message.text)) {
      ctx.reply("Invalid url");
      throw new Error("Invalid Url");
    }
    let data = await createShortUrl(ctx.message.text);
    ctx.reply(data.url.shortUrl);
  } catch (error) {
    console.log({ error });
    throw new Error("Something went wrong");
  }
};

module.exports = {
  handleUrl,
};
