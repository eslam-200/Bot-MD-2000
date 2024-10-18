import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = './media/ايوه.mp3';
  const vn2 = './media/شويه حاجات.mp3';
  const chat = global.db.data.chats[m.chat];
  const fk = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    'participant': '0@s.whatsapp.net'
  };

  if (/^بوت|بوتي|البوت$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    
    m.conn.sendMessage(m.chat, {text: `*شبيك لبيك حموو بين اديك 🧞*`}, {quoted: fk});
    
    m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fk});
    
  } else if (/^تست$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    
    m.conn.sendMessage(m.chat, {text: `*اهو ياعم حموو لسه ممتش 🧞*`}, {quoted: fk});
    
    m.conn.sendMessage(m.chat, {audio: {url: vn2}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: fk});
   
  }
  
  
  return !0;
};
export default handler;
