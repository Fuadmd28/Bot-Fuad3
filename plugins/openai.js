import fetch from 'node-fetch'
let aii = `${hasil.result}`
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw `Hay adakah yang bisa saya bantu??`
m.reply('_Tunggu Sebentar..._')
let yuta = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=SGWN&text=${text}&user=user-unique-id`)
let hasil = await yuta.json()
 conn.sendMessage(m.chat, {
  text: aii,
  contextInfo: {
  externalAdReply: {
  title: "",
  body: "",
  thumbnailUrl: "https://telegra.ph/file/628d7079d9d369f5b2686.jpg",
  sourceUrl: "",
  mediaType: 1,
  renderLargerThumbnail: true
  }}})     
} catch (error) {
  m.reply(`Error: ${error.message}`);
}
handler.help = ['ai', 'openai']
handler.tags = ['fun']
handler.command = /^(ai|openai)$/i
export default handler