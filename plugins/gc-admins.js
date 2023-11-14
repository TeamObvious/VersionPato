const handler = async (m, {conn, participants, groupMetadata, args}) => {
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/admins.jpg';
  const groupAdmins = participants.filter((p) => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find((p) => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
  const pesan = args.join` `;
  const oi = `*EY ADMIN HERMOS@ FIJATE ESTE LINDO GRUPO HDP* ${pesan}`;
  const text = `*━「*𝘽𝙤𝙩𝙨𝙞𝙩𝙤 𝙎𝙖𝙢𝙪𝙧𝙖𝙞 𝙄𝙣𝙫𝙤𝙘𝙖*」━*

${oi}

*❄️: ̗̀➛ ♡YhairXRomi♡*
${listAdmin}

*CREADO POR : SAMURAI BOT!*`.trim();
  conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, {mentions: [...groupAdmins.map((v) => v.id), owner]});
};
handler.help = ['admins <texto>'];
handler.tags = ['group'];
// regex detect A word without case sensitive
handler.customPrefix = /a|@/i;
handler.command = /^(admins|@admins|dmins)$/i;
handler.group = true;
export default handler;
