const downloader = (prefix, botName, ownerName) => {
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
┷┯ *〈 DOWNLOADER 〉*
   ╽
   ┠≽ *${prefix}pinterest* <query>
   ┃ *Desc* : Baixar imagem do Pinterest
   ┠──────────────╼
   ┠≽ *${prefix}ytmp3* <linkyt>
   ┃ *Desc* : Baixe o vídeo do Youtube para mp3
   ┠──────────────╼
   ┠≽ *${prefix}ytmp4* <linkyt>
   ┃ *Desc* : Baixe vídeos do Youtube
   ┠──────────────╼
   ┠≽ *${prefix}fb* <linkfb>
   ┃ *Desc* : Baixe o vídeo do Facebook
   ┠──────────────╼
   ┠≽ *${prefix}ig* <linkig>
   ┃ *Desc* : Baixar vídeos do Instagram
   ┠──────────────╼
   ┠≽ *${prefix}igstory* <linkigstory>
   ┃ *Desc* : Baixe o vídeo instantâneo
   ┠──────────────╼
   ┠≽ *${prefix}happymod* <game>
   ┃ *Desc* : Baixar Game Mod
   ┠──────────────╼
   ┠≽ *${prefix}moddroid* <game>
   ┃ *Desc* : Download Game Mod
   ┠──────────────╼
   ┠≽ *${prefix}playstore* <query>
   ┃ *Desc* : Baixe jogos na Playstore
   ┠──────────────╼
   ┠≽ *${prefix}tiktok* <linktiktok>
   ┃ *Desc* : baixar o vídeo TikTok
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.downloader = downloader
