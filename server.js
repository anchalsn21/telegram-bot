require("dotenv").config();
const express = require("express");
const app = express();
const { Telegraf } = require("telegraf");
const { initializeUtilityBot } = require("./bots/utility_bot");
const { initializeUshrtlyBot } = require("./bots/url_shortner_bot");
const utility_bot = new Telegraf(process.env.UTILITY_BOT_TOKEN);
// const ushrtly_bot = new Telegraf(process.env.USHRTLY_BOT_TOKEN);
initializeUtilityBot(utility_bot);
// initializeUshrtlyBot(ushrtly_bot);

app.get("/", (req, res) => res.json(""));
app.listen(process.env.PORT || 2527, () => console.log("Running on port 2527"));
