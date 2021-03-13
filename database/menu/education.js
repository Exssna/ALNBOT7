const education = (prefix, botName, ownerName) => {
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
┷┯ *〈 EDUCATION 〉*
   ╽
   ┠≽ *${prefix}wiki* <query>
   ┃ *Desc* : Pesquisa de acordo com a Wikipedia [indo]
   ┠──────────────╼
   ┠≽ *${prefix}wikien* <query>
   ┃ *Desc* : Pesquisa de acordo com a Wikipedia [inglês]
   ┠──────────────╼
   ┠≽ *${prefix}nulis* <text>
   ┃ *Desc* : Escreva um texto no livro
   ┠──────────────╼
   ┠≽ *${prefix}map* <location>
   ┃ *Desc* : Mostrar mapa na localização
   ┠──────────────╼
   ┠≽ *${prefix}quotes*
   ┃ *Desc* : Envie uma cotação aleatória
   ┠──────────────╼
   ┠≽ *${prefix}quotes2*
   ┃ *Desc* : Envie uma cotação aleatória 2
   ┠──────────────╼
   ┠≽ *${prefix}tafsirmimpi* <dream>
   ┃ *Desc* : Envie uma interpretação do sonho
   ┠──────────────╼
   ┠≽ *${prefix}translate* <language_code>|<text>
   ┃ *Desc* : Traduzindo uma palavra
   ┠──────────────╼
   ┠≽ *${prefix}artinama* <name>
   ┃ *Desc* : Interpretar nomes
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.education = education
