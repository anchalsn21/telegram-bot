const { getStateCovidData } = require("../api");
const { createStateReply } = require("../messages/state_message");
const handleState = async (ctx) => {
  try {
    const data = await getStateCovidData(ctx.match[0]);

    let message = await createStateReply(data, ctx.match[0]);
    return ctx.reply(message);
  } catch (error) {
    ctx.reply(error.message);
  }
};

module.exports = { handleState };
