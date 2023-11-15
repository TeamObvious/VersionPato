const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*ACTIVENSE PLANTAS D' MRD 🌱* ${pesan}`;
  let teks = `*‧˚꒰🩵 𝗩𝗶𝗼𝗹𝗲𝘁 𝗘𝘃𝗲𝗿𝗴𝗮𝗿𝗱𝗲𝗻 🩵꒱°‧*\n\n ${oi}\n\n𓍢ִ໋❄️๛  *@_dianita.dzn*\n`;
  for (const mem of participants) {
    teks += `𓍢ִ໋❄️๛  @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└*‧˚꒰🩵 𝗩𝗶𝗼𝗹𝗲𝘁 𝗘𝘃𝗲𝗿𝗴𝗮𝗿𝗱𝗲𝗻 🩵꒱°‧\n\n*‧˚꒰🩵 𝗩𝗶𝗼𝗹𝗲𝘁 𝗘𝘃𝗲𝗿𝗴𝗮𝗿𝗱𝗲𝗻 🩵꒱°‧*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
