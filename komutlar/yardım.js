const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Türkiyem Bang Gaming Bot')

.addField("• | ban",`__.ban @etiket/id Sebeb__`)
  
.addField("• | banbilgi",`__.banbilgi id__`)
  
.addField("• | bot-bilgi",`__.istatistik__`)

.addField("• | mute",`__.mute @etiket 1s/1m/1h/1d Sebeb__`)

.addField("• | unban",`__.unban İD__`)

.addField("• | unmute",`__.unmute @etiket Sebeb__`)

.addField("• | rolver",`__.rolver @etiket @roladı__`)

.addField("• | rolal",`__.rolal @etiket @roladı__`)

.addField("• | kayıt",`__.k @etiket/id İsim Yaş__`)

.addField("• | sil",`__.sil 1-100__`)

.addField("• | topteyit",`__.topteyit__`)

.addField("• | stat",`__.stat__`)

.addField("• | isimler",`__.isimler @etiket__`)

.addField("• | isim",`__.isim @etiket İsim | Yaş__`)

.addField("• | kapat",`__.kapat__`)

.addField("• | aç",`__.aç__`)

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}