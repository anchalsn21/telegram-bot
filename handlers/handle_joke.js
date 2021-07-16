const { getRandomJoke } = require("../api");
const { createJokeReply } = require("../messages/joke_message");

const handleJoke = async (ctx) => {
  try {
    const data = await getRandomJoke(ctx.match[0]);
    return ctx.reply(await createJokeReply(data));
  } catch (error) {
    ctx.reply(error.message);
  }
};

module.exports = { handleJoke };
