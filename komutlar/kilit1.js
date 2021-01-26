const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(new Discord.MessageEmbed().setThumbnail(message.author.avatarURL() ? message.author.avatarURL({dynamic: true}) : 'https://cdn.glitch.com/8e70d198-9ddc-40aa-b0c6-ccb4573f14a4%2F6499d2f1c46b106eed1e25892568aa55.png').setImage('https://cdn.glitch.com/0c8ef551-5187-48a8-9daf-f2cc35630f21%2Fyoneticigif.gif').setTitle('Bir hata oldu!').setDescription(`• \`${client.ayarlar.prefix}kanal-kilit\` **kullanmak için,** \`Yönetici\` **yetkisine sahip olman gerekiyor.**`));
  message.channel.send(new Discord.MessageEmbed()
  .setColor('#00001').setTitle(`Bu Kanal ${message.channel.name} Mesajlara Kapatıldı.`));
  message.channel.overwritePermissions([{ id: message.guild.roles.cache.find(a => a.name === '@everyone').id, deny: ['SEND_MESSAGES'] }]);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'kapat'
};