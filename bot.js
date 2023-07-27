const Eris = require("eris");
const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

const bot = new Eris(process.env.DISCORD_BOT_TOKEN, {
    intents: [
        "guildMessages"
    ]
});

bot.on("ready", () => { 
    console.log("Bot is connected and ready!"); 
});

bot.on("error", (err) => {
  console.error(err); 
});

bot.on("messageCreate", (msg) => {
    if(msg.content.startsWith("#")) {
        bot.createMessage(msg.channel.id, "Hello" + msg)
    } 
});

bot.connect();
