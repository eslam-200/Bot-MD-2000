let handler = m => m;
handler.all = async function (m) {
  let chat = global.db.data.chats[m.chat];

  if (/^شعر احات $/i.test(m.text)) {
    let vn =  'https://qu.ax/OiSk' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^الجن|جن$/i.test(m.text)) {
    let vn =  'https://qu.ax/RQOw' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^سبحانه$/i.test(m.text)) {
    let vn =  'https://qu.ax/nGFt.mp3' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^علاوي$/i.test(m.text)) {
    let vn =  'https://qu.ax/vXcL.mp3' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^دانس$/i.test(m.text)) {
    let vn =  'https://qu.ax/NDrj.m4a' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^اضحكي$/i.test(m.text)) {
    let vn =  'https://qu.ax/nDFB' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }

  if (/^بضاني|بيض|مبضون|بضني|ي بيض|انت بضان$/i.test(m.text)) {
    let vn = 'https://qu.ax/oOd';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg', fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^هيجا$/i.test(m.text)) {
    let vn = 'https://qu.ax/DCh';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype: 'audio/mpeg', fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^نو ريب|بلكي|امسحي الريك|تخصني|يخصني|قول تخصني$/i.test(m.text)) {
    let vn =  'https://qu.ax/pSra' ;
    conn.sendPresenceUpdate( 'recording' , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:  'audio/mpeg' , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^انا الادمن|هات رول|رول$/i.test(m.text)) {
    let vn =   'https://qu.ax/pEbX'  ;
    conn.sendPresenceUpdate(  'recording'  , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:   'audio/mpeg'  , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^راب فشيخ$/i.test(m.text)) {
    let vn =    'https://qu.ax/MGGw'   ;
    conn.sendPresenceUpdate(   'recording'   , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:    'audio/mpeg'   , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^.اسكونر|اسكونر.$/i.test(m.text)) {
    let vn =     'https://qu.ax/WOgR'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^عمر id|id$/i.test(m.text)) {
    let vn =     'https://qu.ax/xFwY'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^الغزاله$/i.test(m.text)) {
    let vn =     'https://qu.ax/nlVt'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^نا هنام|هنام|نامو|نام$/i.test(m.text)) {
    let vn =     'https://qu.ax/OJjK'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^ربنا يسمحك$/i.test(m.text)) {
    let vn =     'https://qu.ax/cZJu'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^خخ|خخخخ|خخخخخ|خخخخخخخخخخخ|خخخخخخخخ$/i.test(m.text)) {
    let vn =     'https://qu.ax/YYHr'    ;
    conn.sendPresenceUpdate(    'recording'    , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:     'audio/mpeg'    , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^متناكه|متناك|متناكين|ابن متناكه|بنت متناكه|ناس متناكه|كلو ابن متناكه|عيله متناكه$/i.test(m.text)) {
    let vn =      'https://qu.ax/AUKY'     ;
    conn.sendPresenceUpdate(     'recording'     , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:      'audio/mpeg'     , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^انا تعبان|تعبت|انتو متعبين|🗿$/i.test(m.text)) {
    let vn =      'https://qu.ax/AJzC'     ;
    conn.sendPresenceUpdate(     'recording'     , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:      'audio/mpeg'     , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^كسمك|كسمو|ي كسمك|كسمينك|كسماتك|كسم|.بوت كسمك|كسم البوت|كسمك بوت$/i.test(m.text)) {
    let vn =       'https://qu.ax/WtJD'      ;
    conn.sendPresenceUpdate(      'recording'      , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:       'audio/mpeg'      , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^كسمهم$/i.test(m.text)) {
    let vn =       'https://qu.ax/SUrN'      ;
    conn.sendPresenceUpdate(      'recording'      , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:       'audio/mpeg'      , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }
  if (/^مخنوق$/i.test(m.text)) {
    let vn =        'https://file.io/JNdV5MOnBrJP'       ;
    conn.sendPresenceUpdate(       'recording'       , m.chat);
    conn.sendMessage(m.chat, { audio: { url: vn }, ptt: true, mimetype:        'audio/mpeg'       , fileName: `shawaza_zizo_2024.opp` }, { quoted: m });
  }


  return !0;
};
export default handler;
