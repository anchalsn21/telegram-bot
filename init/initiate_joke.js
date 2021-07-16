const { JOKE_CATEGORIES, STATE_NAMES } = require("../contants");
const initiateJokeEvents = (bot, handlerFn) => {
  JOKE_CATEGORIES.map((cat) => {
    bot.action(cat, handlerFn);
  });

  return true;
};

module.exports = { initiateJokeEvents };
