const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("BOT KOMUTLARI")
  .setDescription('')
  .setColor(0x00ffff)
  .addField("**Eğlence ve Kullanıcı Komutları**", `**avatarım**:Avatarınızı Atar \n**manzararesim**:Manzara Resmi Gösterir. \n**emojiyazı**:Mesajınızı Emojiye Çevirir. \n**hava**:İstediğiniz Bölgenin Hava Durumunu Gösterir. \n**herkesebendençay**:Herkese Çay Verir. \n**çayaşekerat** = Çaya Şeker Atarsınız. \n**çayiç** = Çay İçersiniz. \n**kahkaha**:Kahkaha Atarsınız. \n**çekiç** = Millete Çekiç Atarsın. \n**mesajdöndür**:Mesajınızı Tersten Yazar. \n**mesajküçült**:Mesajınızı Küçültür. \n**şifre**:Rastgele Bir Şifre Oluşturur. \n**koş** = Koşarsınız. \n**slots**:Slot Oynatır \n**sunucubilgi**:Sunucu Bilgisini Gösterir. \n**sunucuresmi**:Sunucu Resmi Gösterir. \n**yumruk-at**:Yumruk Atarsınız.`)
  .addField("**Botun Ana Komutları**", "**yardım**:Bütün Komutları Gösterir. \n**davet** = Davet Linki Gönderir. \n**istatistik** = Botun İstatiklerini Gösterir. \n**ping** = Botun Pingini Gösterir.\n**yenilikler**:Yeni Eklenen Komutları Görüntülersiniz")
  .addField("**Moderatör Komutları**", "**ban**: Kişiyi Banlar. \n**yaz**: Bota İstediğiniz Bir Şey Yazdırırsınız.\n**sil**:X Miktarda Mesaj Siler.")
  .addField("**Yapımcı Komutları**", " **Güvenlik Amacı İle Yapımcı Komutları Gösterilmiyor** ")
  .setFooter("==> Kurucum Mordecai#3303. <===")
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım= ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y', 'komutlar'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
