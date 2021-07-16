const { Markup, EXTRA } = require("telegraf");
const { JOKE_CATEGORIES } = require("../contants");

let kb = [];

const create_joke_categories_markup = () => {
  JOKE_CATEGORIES.map((cat) => {
    kb.push([Markup.button.callback(cat, cat)]);
  });
  return Markup.inlineKeyboard(kb);
};

module.exports = { create_joke_categories_markup };
