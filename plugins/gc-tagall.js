const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*EL MEJOR BOT " SAMURAI BOT " TE ESTA INVOCANDO ☃️* ${pesan}`;
  let teks = `*👑 𝑺𝒂𝒎𝒖𝒓𝒂𝒊 𝑩𝒐𝒕 𝑰𝒏𝒗𝒐𝒄𝒂𝒏𝒅𝒐 👑*\n\n☃️ ${oi}\n\n☃️ * @Comunidad.rc.school*\n`;
  for (const mem of participants) {
    teks += `☃🎄 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└*👑 𝑺𝒂𝒎𝒖𝒓𝒂𝒊 𝑩𝒐𝒕 👑\n\n*👑 𝑺𝒂𝒎𝒖𝒓𝒂𝒊 𝑩𝒐𝒕 👑*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
