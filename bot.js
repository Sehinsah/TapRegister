const Discord = require('discord.js');//
const client = new Discord.Client();//
const ayarlar = require('./ayarlar.json');//
const chalk = require('chalk');//
const moment = require('moment');//
var Jimp = require('jimp');//
const { Client, Util } = require('discord.js');//
const fs = require('fs');//
const db = require('quick.db');//
const express = require('express');//
require('./util/eventLoader.js')(client);//
const path = require('path');//
const snekfetch = require('snekfetch');//
//

var prefix = ayarlar.prefix;//
//
const log = message => {//
    console.log(`${message}`);//
};

client.commands = new Discord.Collection();//
client.aliases = new Discord.Collection();//
fs.readdir('./komutlar/', (err, files) => {//
    if (err) console.error(err);//
    log(`${files.length} komut yüklenecek.`);//
    files.forEach(f => {//
        let props = require(`./komutlar/${f}`);//
        log(`Yüklenen komut: ${props.help.name}.`);//
        client.commands.set(props.help.name, props);//
        props.conf.aliases.forEach(alias => {//
            client.aliases.set(alias, props.help.name);//
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }

    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });
client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});
client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.token)

//-----------------------HOŞ-GELDİN-MESAJI----------------------\\     

client.on("guildMemberAdd", member => {  
    const kanal = member.guild.channels.cache.find(r => r.id === "792512082347819048");
    const register = "<@&792512081899290627>"
    let user = client.users.cache.get(member.id);
    require("moment-duration-format");
      const kurulus = new Date().getTime() - user.createdAt.getTime();  
   
    var kontrol;
  if (kurulus < 1296000000) kontrol = '<a:red:792731473273946123> Hesap Durumu: Güvenilir Değil'
  if (kurulus > 1296000000) kontrol = '<a:green:800044328449867817> Hesap Durumu: Güvenilir Gözüküyor'
    moment.locale("tr");
      const log = new Discord.MessageEmbed()
      .setAuthor(member.guild.name)
  .setDescription("<a:Yldz:798587110730104905> Tap Ailesine Hoşgeldin! <@" + member + "> Seninle " + member.guild.memberCount + " Kişiyiz.\n\n<a:registerbook:800044978298159126> Müsait olduğunda Kayıt Odalarından Birine Geçip Kaydını Yaptırabilirsin. \n\n<a:yukleniyor:800044981700132894> <@&792512081899290627> seninle ilgilenicektir. \n\n<a:780200701246701590:792731457516208138> Hesabın Oluşturulma Tarihi: " + moment(member.user.createdAt).format("YYYY DD MMMM dddd") +  "\n\n"  + kontrol + "\n\n") 
 .setImage("https://cdn.discordapp.com/attachments/786160947278512139/800049807799746590/tenor.gif")
   kanal.send(log)   
     kanal.send(register) 
  });
  
//-----------------------HOŞ-GELDİN-MESAJI----------------------\\    

client.on("guildMemberAdd", member => {
member.setNickname(`İsim | Yaş`) 
}) ;

//SA-AS//
client.on("message", message => {
    if(message.content.toLowerCase() == "sa") 
    return message.channel.send(`**${message.author}, Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "selam") 
    return message.channel.send(`**${message.author}, Selam hoşgeldin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "s.a") 
    return message.channel.send(`**${message.author}, Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "mrb") 
    return message.channel.send(`**${message.author}, Aleyküm Selam.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == "slm") 
    return message.channel.send(`**${message.author}, Selam hoşgeldin.**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".ip") 
    return message.channel.send(`**:flag_tr: Teşkilat Askeri Polisiye Roleplay :flag_tr: Aşağıda Açıklama Kısmından  Ip Adresimizden Serverımıza Gelebilirsiniz Şimdiden İyi oyunlar,İyi Roller dileriz.\n\n :point_right: :zap: mtasa://217.195.202.17:22003 :zap:**`)
});

client.on("message", message => {
    if(message.content.toLowerCase() == ".dc") 
    return message.channel.send(`**:flag_tr: Teşkilat Askeri Polisiye Roleplay :flag_tr: Aşağıda Açıklama Kısmından  Discord Adresimize Gelebilirsiniz Şimdiden İyi oyunlar,İyi Roller dileriz.\n\n :point_right: :zap: https://discord.gg/623dfWHmG9 :zap:**`)
});

////////////////////////////////////////////////////////////////


client.on("message" , async msg => {
  
  if(!msg.guild) return;
  if(msg.content.startsWith(ayarlar.prefix+"afk")) return; 
  
  let afk = msg.mentions.users.first()
  
  const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
  
  const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
 if(afk){
   const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
   const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
   if(msg.content.includes(kisi3)){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
   }
 }
  if(msg.author.id === kisi){

       msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
   db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
   db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
    msg.member.setNickname(isim)
    
  }
  
});
