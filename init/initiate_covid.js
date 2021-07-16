const { STATE_NAMES } = require("../contants");
const initiateCovidEvents = (bot, handlerFn) => {
  for (const key in STATE_NAMES) {
    if (Object.hasOwnProperty.call(STATE_NAMES, key)) {
      element = STATE_NAMES[key];
      bot.action(key, handlerFn);
    }
  }

  return true;
};

module.exports = { initiateCovidEvents };
