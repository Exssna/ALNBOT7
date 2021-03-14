const information = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar todos os usuários de bate-papo
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
┷┯ *〈 INFORMATION 〉*
   ╽
   ┠≽ *${prefix}bahasa*
   ┃ *Desc* : Enviar código de idioma
   ┠──────────────╼
   ┠≽ *${prefix}kodenegara*
   ┃ *Desc* : Send Country Code
   ┠──────────────╼
   ┠≽ *${prefix}kbbi* <question>
   ┃ *Desc* : Perguntando ao KBBI
   ┠──────────────╼
   ┠≽ *${prefix}fakta*
   ┃ *Desc* : Envie um fato aleatório
   ┠──────────────╼
   ┠≽ *${prefix}jadwaltv*
   ┃ *Desc* : Testando
   ┠──────────────╼
   ┠≽ *${prefix}katabijak*
   ┃ *Desc* : Citações Aleatórias
   ┠──────────────╼
   ┠≽ *${prefix}faktaunik*
   ┃ *Desc* : Seencontrar um fato aleatório
   ┠──────────────╼
   ┠≽ *${prefix}infocuaca* <area>
   ┃ *Desc* : Enviar informações meteorológicas
   ┠──────────────╼
   ┠≽ *${prefix}infogempa*
   ┃ *Desc* : Enviando informações sobre terremotos
   ┠──────────────╼
   ┠≽ *${prefix}covidcountry* <country>
   ┃ *Desc* : Envio de informações para Covid-19
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.information = information
