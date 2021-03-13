exports.wait = () => {
        return `⌛ Sendo processado ⌛`
}

exports.timeEnd = () => {
        return `O tempo acabou`
}

exports.succsess = () => {
        return `✔️ Sucesso ✔️`
}

exports.levelon = () => {
        return `❬ ✔ ❭ *habilitar leveling*`
}

exports.levelnoton = () => {
        return `❬ X ❭  *desabilitar leveling*`
}

exports.levelnol = () => {
        return `*SEU NÍVEL AINDA* 0 °-°`
}

exports.stick = () => {
        return `[❗] Falha, ocorreu um erro ao converter a imagem em um adesivo ❌`
}

exports.Iv = () => {
        return `❌ Link inválido ❌`
}

exports.group = () => {
        return `[❗] Este comando só pode ser usado em grupos! ❌`
}

exports.ownerG = () => {
        return `[❗] Este comando só pode ser usado pelo grupo proprietário! ❌`
}

exports.ownerB = () => {
        return `[❗] Este comando só pode ser usado pelo proprietário do bot! ❌`
}

exports.admin = () => {
        return `[❗] Este comando só pode ser usado por administradores de grupo! ❌`
}

exports.Badmin = () => {
        return `[❗] Este comando só pode ser usado quando o bot se torna administrador! ❌`
}

exports.daftarB = (prefix) => {
        return `──「 AINDA NÃO REGISTRADO 」──\nOlá macaco !\nVocê ainda não se registrou, vamos registrar primeiro... \n\nComando : ${prefix}register nome|idade\nExample : ${prefix}register Allison|16`
}

exports.daftarD = () => {
        return `*「 JÁ SE INSCREVA 」*\n\n*você se registrou no banco de dados do bot*`
}

exports.wrongf = () => {
        return`*Formato incorreto / texto em branco*`
}

exports.clears = () => {
        return`*limpar todo o chat sucesso*`
}

exports.pc = () => {
        return`*「 CADASTRO 」*\n\nse você não entendeu a mensagem. significa que você não salvou o número do seu bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
        return`*「 CADASTRE-SE DE DADOS 」*\n\nvocê se cadastrou com os dados \n\n◪ *DATA* \n  │ \n  ├─ ❏ Nome : ${namaUser} \n  ├─ ❏ Número : wa.me/${sender.split("@")[0]} \n  ├─ ❏ Idade : ${umurUser} \n  ├─ ❏ Registrar hora : ${time} \n  │ \n └─ ❏ NS : ${serialUser} \n\n ❏ NOTE : NÃO ESQUEÇA ESTE NÚMERO PORQUE É IMPORTANTE :v`
}

exports.cmdnf = (prefix, command) => {
        return`comando *${prefix}${command}* não encontrado \ tente escrever *${prefix}menu*`
}

exports.owneresce = (pushname) => {
        return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.limitend = (pushname) => {
        return`*Desculpe ${pushname} O limite de hoje aumentou*\n*O limite é redefinido a cada 00:00 horas*`
}

exports.limitcount = (limitCounts) => {
        return`
*「 LIMIT COUNT 」*
o resto do seu limite : ${limitCounts}

NOTE : para chegar ao limite. pode passar de nível ou comprar limite`
}

exports.satukos = () => {
        return`*Adicione os parâmetros 1 (habilitar) ou 0 (desabilitar)`
}

exports.uangkau = (pushname, sender, uangkau) => {
        return`◪ *BALANCE*\n  ❏ *Name* : ${pushname}\n  ❏ *Number* : ${sender.split("@")[0]}\n  ❏ *Money* : ${uangkau}`
}
