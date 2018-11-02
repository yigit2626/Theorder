const Discord = require('discord.js');

exports.run = (client, message, args) => {

    let type = args.slice(0).join(' ');
        if (type.length < 1) return message.reply('<:pencil:365528941194248193> Bug İçin Birşey Girmelisin.');

        client.channels.get("Hata Odasinin ID'si").sendMessage( '**Hata/Bug Bildirim/xAlone Bot** \n__**Kullanici**__ : @' + message.author.tag + '\n__Hata__:**' + type + '**');
    
    message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['bug'],
  permLevel: 0
};

exports.help = {
  name: 'hata',
  description: 'Hata Bildirir.Yapimci xAlone',
  usage: '/hata'
};