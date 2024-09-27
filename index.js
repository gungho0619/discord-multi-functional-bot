require("dotenv").config();
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const axios = require("axios"); //add this line at the top

const prefix = "/";

async function getMeme() {
  console.log(res.data);
  return res.data;
}

const client = new Client({
  intents: [
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
  partials: [Partials.Channel],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(process.env.CLIENT_TOKEN);

client.on("messageCreate", async (msg) => {
  // You can view the msg object here with console.log(msg)
  if (msg.content === "Hello") {
    msg.reply(`Hello ${msg.author.username}`);
  }
  if (msg.content === "meme") {
    msg.channel.send("Here's your meme!");
    const img = await getMeme();
    msg.channel.send(img);
  }
});
