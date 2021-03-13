const fun = (prefix, botName, ownerName) => {
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
┃ *Desc* : Mostrar todos os usuários de chat
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
┷┯ *〈 FUN 〉*
   ╽
   ┠≽ *${prefix}alay* <text>
   ┃ *Desc* : Mudando Palavras em Alay
   ┠──────────────╼
   ┠≽ *${prefix}tebakgambar* <text>
   ┃ *Desc* : Game
   ┠──────────────╼
   ┠≽ *${prefix}slap* <text>
   ┃ *Desc* : Toxic
   ┠──────────────╼
   ┠≽ *${prefix}persenbucin*
   ┃ *Desc* : Verificar a porcentagem de Bucin
   ┠──────────────╼
   ┠≽ *${prefix}persengay*
   ┃ *Desc* : Verifique sua porcentagem de gays
   ┠──────────────╼
   ┠≽ *${prefix}rate*
   ┃ *Desc* : Verifique sua taxa
   ┠──────────────╼
   ┠≽ *${prefix}gantengcek*
   ┃ *Desc* : Quão bonito
   ┠──────────────╼
   ┠≽ *${prefix}cantikcek*
   ┃ *Desc* : Que bonito
   ┠──────────────╼
   ┠≽ *${prefix}watak*
   ┃ *Desc* : Transmitindo personagens ao acaso
   ┠──────────────╼
   ┠≽ *${prefix}hobby*
   ┃ *Desc* : Envio aleatório de hobbies
   ┠──────────────╼
   ┠≽ *${prefix}simi* <text>
   ┃ *Desc* : Fale com Simi
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.fun = fun
