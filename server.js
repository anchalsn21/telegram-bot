require("dotenv").config();
const express = require("express");
const app = express();
const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
let ct = [];
bot.on("text", (ctx) => {
  ct.push(ctx.message);
  ctx.reply(`${ctx.message}`);
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

app.get("/", (req, res) => res.json(ct));
app.listen(process.env.PORT || 2527, () => console.log("Running on port 2527"));
