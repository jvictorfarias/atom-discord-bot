require('dotenv/config');

const Discord = require('discord.js');
const ytdl = require('ytdl-core');

const client = new Discord.Client();

client.login('SEU TOKEN AQUI!!!');

client.on('ready', () => {
  console.log('bot online!');
});

client.on('message', async (message) => {
  if (message.content === '!play') {
    /**
     * ! Variável que contém o canal de voz que o usuário está atualmente
     */
    const voiceChannel = message.member.voice.channel;

    if (!voiceChannel) {
      return message.reply('Entre em um canal de voz primeiro!');
    }

    const connection = await voiceChannel.join();

    const watcher = connection.play(
      ytdl('https://youtu.be/-56DjexrXI0?list=RD-56DjexrXI0', {
        filter: 'audioonly',
        quality: 'highest',
      })
    );

    watcher.on('close', () => voiceChannel.leave());
  }
});
