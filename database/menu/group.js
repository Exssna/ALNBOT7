const group = (prefix, botName, ownerName) => {
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
┷┯ *〈 GROUP 〉*
   ╽
   ┠≽ *${prefix}opengc*
   ┃ *Desc* : Grupo de Abertura
   ┠──────────────╼
   ┠≽ *${prefix}closegc*
   ┃ *Desc* : Fechando o Grupo
   ┠──────────────╼
   ┠≽ *${prefix}hidetag*
   ┃ *Desc* : Ocultar mensagem de tag para todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}setname* <text>
   ┃ *Desc* : Alterar o nome do grupo
   ┠──────────────╼
   ┠≽ *${prefix}setdesc* <teks>
   ┃ *Desc* : Alterar Grupo de Descrição
   ┠──────────────╼
   ┠≽ *${prefix}promote* <@tag>
   ┃ *Desc* : Promova pessoas para serem grupos de administradores
   ┠──────────────╼
   ┠≽ *${prefix}demote* <@tag>
   ┃ *Desc* : Rebaixar pessoas a membros do grupo
   ┠──────────────╼
   ┠≽ *${prefix}tagall*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall2*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall3*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall4*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}tagall5*
   ┃ *Desc* : Mencione todos os membros
   ┠──────────────╼
   ┠≽ *${prefix}add* <12542123926>
   ┃ *Desc* : DESABILIDADO
   ┠──────────────╼
   ┠≽ *${prefix}kick* <@tag>
   ┃ *Desc* : DESABILIDADO
   ┠──────────────╼
   ┠≽ *${prefix}listadmins*
   ┃ *Desc* : Mostrar Administradores de Grupo de Lista
   ┠──────────────╼
   ┠≽ *${prefix}listgroup*
   ┃ *Desc* : Mostrar lista de todos os bots
   ┠──────────────╼
   ┠≽ *${prefix}linkgroup*
   ┃ *Desc* : Mostrar link do grupo
   ┠──────────────╼
   ┠≽ *${prefix}join* <linkgroup>
   ┃ *Desc* : Adicionar bot para se juntar ao seu grupo
   ┠──────────────╼
   ┠≽ *${prefix}leave*
   ┃ *Desc* : Tell the Bot to Leave the Group
   ┠──────────────╼
   ┠≽ *${prefix}welcome* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso de boas-vindas
   ┠──────────────╼
   ┠≽ *${prefix}antilink* <1/0>
   ┃ *Desc* : Ativando / Desativando o Recurso Antilink
   ┠──────────────╼
   ┠≽ *${prefix}nsfw* <1/0>
   ┃ *Desc* : Ativando / Desativando o Recurso NSFW
   ┠──────────────╼
   ┠≽ *${prefix}delete*
   ┃ *Desc* : Excluir mensagem de bot
   ┠──────────────╼
   ┠≽ *${prefix}simih* <1/0>
   ┃ *Desc* : Ativando / desativando o recurso Simih
   ┠──────────────╼
   ┠≽ *${prefix}leaderboard* 
   ┃ *Desc* : Ainda testando
   ┠──────────────╼
   ┠≽ *${prefix}tagme*
   ┃ *Desc* : Mencionar você
   ┠──────────────╼
   ┠≽ *${prefix}ownergroup*
   ┃ *Desc* : Mostra quem é o proprietário do grupo
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴ ʙᴏᴛ © ${botName}`
}
exports.group = group
