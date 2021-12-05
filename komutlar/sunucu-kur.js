const { MessageEmbed, Discord } = require('discord.js');
const data = require('quick.db');
const { MessageButton } = require('discord-buttons');

module.exports = {
    conf: {
      aliases: ["sunucu-kur"],
      name: "sunucu-kur",
      help: "sunucu-kur"
    },

    run: async (client, message, args, embed) => {
let member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author);

    var button_1 = new MessageButton()
    .setID("Kur")
    .setLabel("Gif Sunucu Kur")
    .setStyle("blurple")

    var button_2 = new MessageButton()
    .setID("Sıfırla")
    .setLabel("Sunucuyu Sıfırla")
    .setStyle("green")

    var button_3 = new MessageButton()
    .setID("İptal")
    .setLabel("❌")
    .setStyle("red")


if(message.author.id !== message.guild.owner.user.id) return message.channel.send(
new Discord.MessageEmbed().setThumbnail(message.author.avatarURL())
.setColor('#330066')
.setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
.setDescription(`• \`.sunucu-kur\` **kullanmak için,** \`Sunucu Sahibi\` **olmanız gerekiyor.**`)
.addField('Sunucu Sahibi', message.guild.owner.user.tag));

let ryz = new MessageEmbed()
.setDescription(`Sunucu kurulumunu başlatmak için lütfen 30 saniye içerisinde ; 

\`Gif backupı için :\` **Gif Sunucu Kur**
\`Sunucu ayarlarını sıfırlamak için :\` **Sunucuyu Sıfırla**
\`İşlemi iptal etmek için :\` ❌ **butonuna** tıklayınız!

**Botun Rolünün En Üstte Olduğundan Emin Olunuz !**`)
.setColor('#330066')
.setAuthor(member.user.tag, member.user.avatarURL({ dynamic: true }))
.setFooter(`Developed By ryz | Ping: ${client.ws.ping.toFixed(0)}`, member.user.avatarURL({ dynamic: true }))
 let msg = await message.channel.send({ buttons : [ button_1, button_2, button_3 ], embed: ryz})
 
    var filter = (button) => button.clicker.user.id === message.author.id;
   
    let collector = await msg.createButtonCollector(filter, { time: 30000 })

      collector.on("collect", async (button) => {

if(button.id === "Kur") {
msg.delete();
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ryz Boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());

///// roller  ////

message.guild.roles.create({ data: { name: 'Owner' }, reason: 'ryz' }).then(role => {
    role.setPermissions(['ADMINISTRATOR']);
    role.setColor('#000000');
    });

message.guild.roles.create({ data: { name: 'Owner Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#ffffff');
    });

message.guild.roles.create({ data: { name: '✯' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#3c20ff');
    });

message.guild.roles.create({ data: { name: '✯' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#ff0606');
    });

message.guild.roles.create({ data: { name: '✯' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#f8ff0d');
    });

message.guild.roles.create({ data: { name: '✯' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#19ff88');
    });

message.guild.roles.create({ data: { name: '✯' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#0a0000');
    });

message.guild.roles.create({ data: { name: 'Legendary Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#300096');
    });

message.guild.roles.create({ data: { name: 'Founder Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#11104a');
    });

message.guild.roles.create({ data: { name: 'Radyant Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#a758c9');
    });

message.guild.roles.create({ data: { name: 'Rebel Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#5f029a');
    });

message.guild.roles.create({ data: { name: 'Ceo Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#4efc7f');
    });

message.guild.roles.create({ data: { name: 'Emperor Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#ffb9b9');
    });

message.guild.roles.create({ data: { name: 'Lozan Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#8f5b96');
    });

message.guild.roles.create({ data: { name: 'Director Of Best' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#b6ceff');
    });

message.guild.roles.create({ data: { name: 'Best Rich Gang 💸' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#8400ff');
    });

message.guild.roles.create({ data: { name: 'Gif Makers' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#e3ff00');
    });

message.guild.roles.create({ data: { name: 'ruz guardları 🍓' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#ff1b5f');
    });

message.guild.roles.create({ data: { name: '</>' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#0200ff');
    });

message.guild.roles.create({ data: { name: 'Best Designer' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#3298ff');
    });

message.guild.roles.create({ data: { name: 'Best Of Sponsor' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#0e7441');
    });

message.guild.roles.create({ data: { name: 'Verified Developers' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#5d65ff');
    });

message.guild.roles.create({ data: { name: 'Early Supporter' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#262222');
    });

message.guild.roles.create({ data: { name: 'Best Vip' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#66fac2');
    });

message.guild.roles.create({ data: { name: 'Best Members' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#000000');
    });

message.guild.roles.create({ data: { name: 'Best Banner 🎈' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#000000');
    });

message.guild.roles.create({ data: { name: '🔞 NSFW' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#000000');
    });

message.guild.roles.create({ data: { name: 'Muted' }, reason: 'ryz' }).then(role => {
    role.setPermissions([]);
    role.setColor('#000000');
    });

///// kanallar ////
message.guild.channels.create('discord.gg/1456', {type: 'voice'});

message.guild.channels.create('⚡ Shéw', {type: 'category'}).then(parent => {
message.guild.channels.create('🎀・welcome', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎯・pinterest', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🧚・gif-maker', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('✨・role-selection', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔞・nsfw-role', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('📌 İMPORTANTE', {type: 'category'}).then(parent => {
message.guild.channels.create('📜・rules', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📣・announcement', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💎・booster-info', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚀・booster', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🤖・gif-log', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🎀 Shéw', {type: 'category'}).then(parent => {
message.guild.channels.create('💬・chat-general', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📸・imagens', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔗・commands', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・banner-commands', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・owo', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎨・design', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('💽 GIF EDITOR', {type: 'category'}).then(parent => {
message.guild.channels.create('💽・edi̇tor-i̇nfo', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💽・edi̇tor', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('PRIVATE İCON (VIP)', {type: 'category'}).then(parent => {
message.guild.channels.create('♀・gi̇rl-i̇con-vi̇p⚡', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('♂・boy-i̇con-vi̇p⚡', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('☿・couple-i̇con-vi̇p⚡', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('⭐ BANNER', {type: 'category'}).then(parent => {
message.guild.channels.create('⭐・erotic-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・girl-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・boy-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・couple-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・tatto-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・articles-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・animes-banner', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⭐・landscape-banner', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🌸 WOMAN', {type: 'category'}).then(parent => {
message.guild.channels.create('💎・woman-vip-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌸・woman-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌸・woman-icon', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚭・woman-smoke-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('✨ MAN', {type: 'category'}).then(parent => {
message.guild.channels.create('💎・man-vip-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('✨・man-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('✨・man-i̇con', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚬・man-smoke-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('💞 COUPLES', {type: 'category'}).then(parent => {
message.guild.channels.create('💎・couple-vip-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💘・couples-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💘・couples-icon', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💘・couples-divided-gif', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🔮 ANIMES', {type: 'category'}).then(parent => {
message.guild.channels.create('💎・anime-vip-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔮・anime-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔮・anime-icon', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('✔ NIKE & ⚠ FLASH', {type: 'category'}).then(parent => {
message.guild.channels.create('✔・nike-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⚠・flash-gif', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🐶ANİMALS', {type: 'category'}).then(parent => {
message.guild.channels.create('🐶・animal-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🐶・animal-icon', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🐈・cat-and-girl-gif', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🔞 EROTİC', {type: 'category'}).then(parent => {
message.guild.channels.create('🔞・eroti̇c-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔞・erotic-icon', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔞・nsfw', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔞・nsfw-videos', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🏁 BLACK AND WHİTE', {type: 'category'}).then(parent => {
message.guild.channels.create('🏁・black-and-white-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🏁・black-and-white-icon', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🚘CAR - MOTORCYLE🛵', {type: 'category'}).then(parent => {
message.guild.channels.create('🚘・car-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🛵・motorcycle-gif', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('💧 REQUEST', {type: 'category'}).then(parent => {
message.guild.channels.create('😈・lucifer-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💚・billie-eilish-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌸・harley-quinn-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💄・madison-beer-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌹・ester-expósito-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👑・thomas-shelby-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🌠・leonardo-dicaprio-gif', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('⭐ Other styles', {type: 'category'}).then(parent => {
message.guild.channels.create('🦋・aesthetic', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('⚡・neon-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('😷・mask-gi̇f', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔫・gun-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👭・bff-gif', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('💀・terror', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎬・movies', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎧・streamer', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🎮・games', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🚬・sad', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('👶🏻・bebê', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('🔄 RANDOM GİF', {type: 'category'}).then(parent => {
message.guild.channels.create('🔄・gifs', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('🔄・icons', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('random-banner', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
message.guild.channels.create('SHEW GİF LOGS', {type: 'category'}).then(parent => {
message.guild.channels.create('📝düzenlenen-mesaj', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('📝silinen-mesaj', {type: 'text'}).then(c => c.setParent(parent.id));
message.guild.channels.create('ban-log', {type: 'text'}).then(c => c.setParent(parent.id));
});
//ryz
}
/////////////////////////////////////////////////////
if(button.id === "Sıfırla") {
msg.delete();
message.guild.roles.cache.filter(a => !a.managed && a.name !== '@everyone' && a.position < message.guild.members.cache.get(client.user.id).roles.highest.position).forEach(role => role.delete('ryz Boomer') && console.log(role.name+' silindi sqrt'));
message.guild.channels.cache.forEach(a => a.delete());
}

if(button.id === "İptal") {
msg.delete();
await button.think(true);
await button.reply.edit(`${button.clicker.member} Başarıyla Sunucu Kurma İşlemi İptal Edilmiştir!`)
}

})
}};
