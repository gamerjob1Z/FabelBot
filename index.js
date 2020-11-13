const discord = require("discord.js");
const botconifg =require ("./botconfig.json");
const client = new discord.Client();

client.login(botconifg.token);

client.on("ready" ,async() => {

console.log(`${client.user.username} is online. `);
client.user.setActivity("spelen" , {type: "!help"})
});


client.on("message" , async message=> {

if(message.author.bot)return;

if(message.channel.type =="dm") return;

var prefix = botconifg.prefix;

var messageArray = message.content.split(" ");
 
var command = messageArray[0];

if(command === `${prefix}ip`){
    return message.channel.send("Ons IP is server.fabelcraft.nl en is te bezoeken op 1.16.4.!");

}


});

bot.login(process.env.token);