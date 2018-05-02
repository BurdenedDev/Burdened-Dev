const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`[READY]`, `I Have Logged Into Bot ${client.user.tag}!`)
client.user.setStatus('dnd');
});

var prefix = ['+'];

client.on('message', async message => {
  if(message.author !== client.user) return;
  if(message.content.indexOf(prefix) !== 0) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if (command === 'game') {
  var game = args.join(" ").trim();
  if(!game || game.length < 1) game = null;
  client.user.setPresence({ game: { name: game, type: 0 } });
  message.delete();
  return console.log(`[UPDATE]`, `My Game Updated To ${game}!`);
};
  
});

client.login(process.env.TOKEN)

// Hosting Code Line Starts Here
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
// Hosting Code Lines STOP Here!