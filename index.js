const TeleBot = require('telebot');
const schedule = require('node-schedule');
const bot = new TeleBot("5301126708:AAEm_noxBq232wJ5edFlqqNz2jE_T3vfPt0");
// const bot = new TeleBot(process.env.BOT_TOKEN);

const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '/iluha/temp/bot/.env')});
const message = 'Нагадую, що русні пізда'

schedule.scheduleJob('0 0 * * *', () => {
console.log('before sendMessage')
bot.sendMessage(246389668,message)	
console.log('after sendMessage')
})

bot.on(/^\/say (.+)$/, (msg) => {
	msg.reply.text('Шо там по русні? Русні пізда')
})

bot.start();