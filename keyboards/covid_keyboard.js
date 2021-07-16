const { Markup } = require("telegraf");
const { STATE_NAMES } = require("../contants");
let state_kb_data = [];

const create_covid_state_markup = () => {
  for (const key in STATE_NAMES) {
    if (Object.hasOwnProperty.call(STATE_NAMES, key)) {
      element = STATE_NAMES[key];
      state_kb_data.push([Markup.button.callback(element, key)]);
    }
  }

  return Markup.inlineKeyboard(state_kb_data);
};

module.exports = { create_covid_state_markup };
