const { handleUrl } = require("../handlers/handle_url");

const initializeUshrtlyBot = async (bot) => {
  bot.start((ctx) =>
    ctx.reply(`
    Hi Welcome to Ushrtly Bot
    You can get shortened url here

`)
  );
  bot.help((ctx) =>
    ctx.reply(`
Hi Welcome to Ushrtly Bot
You can get shortened url here
`)
  );

  bot.on("text", handleUrl);

  //   bot.command(new RegExp("joke", "i"), (ctx) => {
  //     ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, joke_keyboard);
  //   });

  //   bot.hears(new RegExp("joke", "i"), (ctx) => {
  //     ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, joke_keyboard);
  //   });

  bot.launch();

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
};

module.exports = {
  initializeUshrtlyBot,
};
