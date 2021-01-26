const wenzy = require('discord.js');

exports.run = async (client, message, args) => {
                const ayarlar = require('../ayarlar.json')
                    let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

 if(!["792512081899290627"].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
var role = message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name == args.slice(1).join(' '));
 if(!["792512081899290627"].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
if (!member) return message.channel.send('**Lütfen bir kullanıcıyı etiketleyin veya ismini yazın.**');
if (!role) return message.channel.send(' **Rol bulumadaım.**');
  if (message.member.roles.highest.comparePositionTo(role) < 1) {
  return message.channel.send(`**Kanka verilecek rol senin rolden üstte veremem.**`);
  }

  try{
await (member.roles.add(role.id))
 message.channel.send(new wenzy.MessageEmbed().setDescription(`${member} isimli üyeye \`${role.name}\` isimli yetki başarıyla verildi!`)  .setFooter('Bu komutu kullanan yetkili ' + message.author.tag, message.author.avatarURL).setColor('#D2EE07'));
    
  } catch (e) {
    console.log(e);
    message.channel.send('Hata oluştu!');
  }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolver'],
  permLevel: 0
};

exports.help = {
  name: 'rol-ver',
  description: 'Belirttiğiniz kullanıcıya belirttiğiniz rolü verir.',
  usage: 'rol-ver'
};