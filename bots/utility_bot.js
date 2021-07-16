const { create_joke_categories_markup } = require("../keyboards/joke_keyboard");
const { create_covid_state_markup } = require("../keyboards/covid_keyboard");
const { initiateCovidEvents } = require("../init/initiate_covid");
const { initiateJokeEvents } = require("../init/initiate_joke");
const { handleState } = require("../handlers/handle_state");
const { handleJoke } = require("../handlers/handle_joke");

const initializeUtilityBot = async (bot) => {
  const state_keyboard = create_covid_state_markup();
  const joke_keyboard = create_joke_categories_markup();

  bot.start((ctx) =>
    ctx.reply(`
Hi Welcome to Utility Bot

You can get daily covid count of your state. 

You can also get a Random joke 

Type Covid or /covid to get started with covid updates

Type Joke or /joke to get started with a random joke

Type /help to get some help

`)
  );
  bot.help((ctx) =>
    ctx.reply(`
Hi Welcome to Utility Bot

You can get daily covid count of your state. 

You can also get a Random joke 

Type Covid or /covid to get started with covid updates

Type Joke or /joke to get started with a random joke

Type /help to get some help

`)
  );

  bot.command(new RegExp("joke", "i"), (ctx) => {
    ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, joke_keyboard);
  });

  bot.hears(new RegExp("joke", "i"), (ctx) => {
    ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, joke_keyboard);
  });

  bot.command(new RegExp("covid", "i"), (ctx) => {
    ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, state_keyboard);
  });

  bot.hears(new RegExp("covid", "i"), (ctx) => {
    ctx.telegram.sendCopy(ctx.message.chat.id, ctx.message, state_keyboard);
  });

  initiateCovidEvents(bot, handleState);

  initiateJokeEvents(bot, handleJoke);

  bot.launch();

  // Enable graceful stop
  process.once("SIGINT", () => bot.stop("SIGINT"));
  process.once("SIGTERM", () => bot.stop("SIGTERM"));
};

module.exports = {
  initializeUtilityBot,
};
