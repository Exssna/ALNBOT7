const imagemaker = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 「  7.0.1  」
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info*
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist*
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}totaluser*
┃ *Desc* : Mostrar bot de uso de todos os usuários
┠──────────────╼
┠≽ *${prefix}request*
┃ *Desc* : Solicitar recursos para o robô proprietário
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 IMAGE MAKER 〉*
   ╽
   ┠≽ *${prefix}bpink* <text>
   ┃ *Desc* : Make BlackPink Image
   ┠──────────────╼
   ┠≽ *${prefix}quotemaker* <text>
   ┃ *Desc* : Imagem de fazer citações
   ┠──────────────╼
   ┠≽ *${prefix}snowwrite* <text|text>
   ┃ *Desc* : Faça a imagem do Snowwrite
   ┠──────────────╼
   ┠≽ *${prefix}3dtext* <text>
   ┃ *Desc* : Criar imagem de texto 3D
   ┠──────────────╼
   ┠≽ *${prefix}firetext* <text>
   ┃ *Desc* : Make Fire Text Image
   ┠──────────────╼
   ┠≽ *${prefix}glitch* <text|text>
   ┃ *Desc* : Imagem Make Glitch
   ┠──────────────╼
   ┠≽ *${prefix}shadow* <text>
   ┃ *Desc* : Make Shadow Image
   ┠──────────────╼
   ┠≽ *${prefix}burnpaper* <text>
   ┃ *Desc* : Make Burn Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}coffee* <text>
   ┃ *Desc* : Make Coffee Image
   ┠──────────────╼
   ┠≽ *${prefix}water* <text>
   ┃ *Desc* : Make Water Image
   ┠──────────────╼
   ┠≽ *${prefix}lovepaper* <text>
   ┃ *Desc* : Make Love Papper Image
   ┠──────────────╼
   ┠≽ *${prefix}woodblock* <text>
   ┃ *Desc* : Make Wood Block Image
   ┠──────────────╼
   ┠≽ *${prefix}qowheart* <text>
   ┃ *Desc* : Faça citações na imagem dos corações de madeira
   ┠──────────────╼
   ┠≽ *${prefix}mutgrass* <text>
   ┃ *Desc* : Faça uma mensagem sob a imagem da grama
   ┠──────────────╼
   ┠≽ *${prefix}undergocean* <text>
   ┃ *Desc* : Imagem Make Message Underground Ocean
   ┠──────────────╼
   ┠≽ *${prefix}woodenboards* <text>
   ┃ *Desc* : Imagem de Tábuas de Madeira
   ┠──────────────╼
   ┠≽ *${prefix}wolfmetal* <text>
   ┃ *Desc* : Imagem de fazer Wolf Metal
   ┠──────────────╼
   ┠≽ *${prefix}metalictglow* <text>
   ┃ *Desc* : Imagem de tornar o texto metálico brilhante
   ┠──────────────╼
   ┠≽ *${prefix}8bit* <text|text>
   ┃ *Desc* : Imagem de 8 bits
   ┠──────────────╼
   ┠≽ *${prefix}herrypotter* <text>
   ┃ *Desc* : Faça a imagem de Harry Potter
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.imagemaker = imagemaker
