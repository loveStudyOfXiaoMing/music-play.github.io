const studentInfo = {
  id: '25216950530',
  name: '陈彦帆'
};

const playlist = [
  {
    title: '七友',
    artist: '梁汉文',
    album: 'Edmond Hits 48',
    duration: 259,
    url: './static/七友/七友.mp3',
    cover: './static/七友/七友.jpg',
    lyricsFile: './static/七友/七友.lrc',
    lyricsInline: `[00:00.0]七友 - 梁汉文 (Edmond Leung)
[00:08.49]词：林夕
[00:16.99]曲：雷颂德
[00:25.49]为了她 又再勉强去谈天论爱
[00:30.77]又再振作去慰解他人
[00:34.39]如难复合便尽早放开 凡事看开
[00:39.75]又再讲 没有情人时还可自爱
[00:45.1]忘掉或是为自己感慨
[00:48.34]笑住说沉沦那些苦海 会有害
[00:54.61]因为我 坚强到
[00:56.45]利用自己的痛心 转换成爱心
[01:01.87]抵我对她操心
[01:04.27]已记不起我也有权利爱人
[01:08.05]谁人曾照顾过我的感受
[01:11.59]待我温柔 吻过我伤口
[01:15.85]能得到的安慰是失恋者得救后
[01:19.76]很感激忠诚的狗
[01:22.39]谁人曾介意我也不好受
[01:25.979996]为我出头 碰过我的手
[01:30.14]重生者走得的都走
[01:33.490005]谁人又为天使忧愁
[01:37.07]甜言蜜语没有
[01:39.14]但却有我这个好友
[01:55.11]直到她 又再告诉我重新被爱
[02:00.33]又再看透了我的将来
[02:03.91]完成任务后大可喝彩 无谓搭台
[02:09.27]别怪她 就怪我永远难得被爱
[02:14.64]然后自虐地赞她可爱
[02:17.91]往日最彷徨那刻好彩 有我在
[02:24.2]因为我 坚强到
[02:26.07]利用自己的痛心 转换成爱心
[02:31.4]抵我对她操心
[02:33.79001]已记不起我也有权利爱人
[02:37.58]谁人曾照顾过我的感受
[02:41.18]待我温柔 吻过我伤口
[02:45.4]能得到的安慰是失恋者得救后
[02:49.29001]很感激忠诚的狗
[02:51.95999]谁人曾介意我也不好受
[02:55.51]为我出头 碰过我的手
[02:59.72]重生者走得的都走
[03:03.02]谁人又为天使忧愁
[03:06.67]甜言蜜语没有
[03:08.67]但却有我这个好友
[03:17.42]白雪公主不多
[03:19.7]认命扮矮人的有太多个 早有六个
[03:25.09]多我这个不多
[03:27.45]我太好心还是太傻
[03:30.45999]未问过她有没有 理我的感受
[03:34.99]待我温柔 吻过我伤口
[03:39.12]能得到的安慰是失恋者得救后
[03:43.01]很感激忠诚的狗
[03:45.69]谁人曾介意我也不好受
[03:49.29001]为我出头 碰过我的手
[03:53.47]重生者走得的都走
[03:56.75]谁人又为天使忧愁
[04:00.37]甜言蜜语没有
[04:02.38]但却有我这个好友`,
    theme: {
      bgTop: '#4b2f19',
      bgBottom: '#120903',
      text: '#f7f0e7',
      muted: 'rgba(247, 240, 231, 0.75)',
      accent: '#f1c27d',
      accentDark: '#8b5b21'
    }
  },
  {
    title: '吴哥窟',
    artist: '吴雨霏',
    album: '单曲',
    duration: 223,
    url: './static/吴哥窟/吴哥窟.mp3',
    cover: './static/吴哥窟/吴哥窟.jpg',
    lyricsFile: './static/吴哥窟/吴哥窟.lrc',
    lyricsInline: `[00:00.0]吴哥窟 - 吴雨霏 (Kary Ng)
[00:02.86]词：林若宁
[00:05.73]曲：陈珀
[00:08.59]编曲：陈珀
[00:11.46]制作人：梁荣骏
[00:14.33]睁开双眼做场梦
[00:19.17]问你 送我归家有何用
[00:25.62]虽知道你的她 无言地向你尽忠
[00:32.07]望见你隐藏你戒指 便沉重
[00:40.21]心声安葬在岩洞
[00:45.07]上帝 四次三番再愚弄
[00:51.55]听得见耳边风 难逃避你那面孔
[00:58.0]越要退出 越向你生命移动
[01:04.48]难道我有勇气与你在一起
[01:09.0]庆祝正日
[01:10.99]难道你有勇气反悔诺言 你专一
[01:17.53]两个人 多挤迫
[01:21.01]难容纳多一番秘密
[01:24.0]捉不紧 变得更加固执
[02:07.84]不应该滥用名义
[02:12.61]被你 引诱多一个名字
[02:19.06]身份远 记忆深 浮尘滴进觉悟寺
[02:25.53]雾里看花 没有发生任何事
[02:32.04001]难道我有勇气与你在一起
[02:36.53]庆祝正日
[02:38.56]难道你有勇气反悔诺言 你专一
[02:45.04001]两个人 多挤迫
[02:48.55]难容纳多一番秘密
[02:51.47]捉不紧 变得更加固执
[02:57.95999]原谅你太理性
[03:00.36]与我在一起要守秘密
[03:04.46]原谅我太野性 想这段情更深刻
[03:10.93]两个人 一消失
[03:14.46]谣言便得不到证实
[03:17.43]只得幽暗的晚空 记得`,
    theme: {
      bgTop: '#0f2733',
      bgBottom: '#060f1c',
      text: '#e6f3f8',
      muted: 'rgba(230, 243, 248, 0.75)',
      accent: '#7bdce2',
      accentDark: '#2d7b86'
    }
  }
];

const lyricsCache = new Map();

const elements = {
  audio: document.querySelector('[data-audio]'),
  audioSource: document.querySelector('[data-audio-source]'),
  title: document.querySelector('[data-title]'),
  artist: document.querySelector('[data-artist]'),
  album: document.querySelector('[data-album]'),
  cover: document.querySelector('[data-cover]'),
  lyricsList: document.querySelector('[data-lyrics-list]'),
  status: document.querySelector('[data-status]'),
  progress: document.querySelector('[data-progress]'),
  currentTime: document.querySelector('[data-current-time]'),
  duration: document.querySelector('[data-duration]'),
  toggle: document.querySelector('[data-toggle]'),
  prev: document.querySelector('[data-prev]'),
  next: document.querySelector('[data-next]'),
  volume: document.querySelector('[data-volume]'),
  speed: document.querySelector('[data-speed]'),
  studentId: document.querySelector('[data-student-id]'),
  studentName: document.querySelector('[data-student-name]'),
  disc: document.querySelector('[data-disc]')
};

const state = {
  currentIndex: 0,
  isPlaying: false,
  lyrics: [],
  currentLyricIndex: -1,
  playbackRate: 1
};

function applyTheme(theme) {
  if (!theme) return;
  const root = document.documentElement;
  const map = {
    '--bg-top': theme.bgTop,
    '--bg-bottom': theme.bgBottom,
    '--text': theme.text,
    '--muted': theme.muted,
    '--accent': theme.accent,
    '--accent-dark': theme.accentDark
  };
  Object.entries(map).forEach(([cssVar, value]) => {
    if (value) {
      root.style.setProperty(cssVar, value);
    }
  });
}

function initStudentInfo() {
  if (elements.studentId && studentInfo.id) {
    elements.studentId.textContent = `学号：${studentInfo.id}`;
  }
  if (elements.studentName && studentInfo.name) {
    elements.studentName.textContent = `姓名：${studentInfo.name}`;
  }
}

function formatTime(value) {
  if (Number.isNaN(value)) return '00:00';
  const minutes = Math.floor(value / 60);
  const seconds = Math.floor(value % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function updateStatusLabel() {
  const order = `${state.currentIndex + 1}/${playlist.length}`;
  const play = state.isPlaying ? '播放中' : '待播放';
  const rate = state.playbackRate || 1;
  const rateText = rate !== 1 ? ` · 倍速 ${rate}x` : '';
  elements.status.textContent = `${play} · 第 ${order} 首${rateText}`;
}

function applyPlaybackRateFromUI() {
  if (!elements.audio) return 1;
  const raw = elements.speed ? Number(elements.speed.value) : 1;
  const rate = Number.isFinite(raw) && raw > 0 ? raw : 1;
  elements.audio.playbackRate = rate;
  state.playbackRate = rate;
  return rate;
}

function showLyricPlaceholder(message = '歌词加载中...') {
  elements.lyricsList.innerHTML = '';
  const li = document.createElement('li');
  li.textContent = message;
  li.className = 'lyric-line loading visible';
  elements.lyricsList.appendChild(li);
}

function parseLRC(text) {
  const entries = [];
  const lines = text.split(/\r?\n/);
  const pattern = /\[(\d+):(\d+(?:\.\d+)?)\](.*)/;
  lines.forEach((raw) => {
    const line = raw.trim();
    if (!line) return;
    const match = line.match(pattern);
    if (!match) return;
    const minutes = Number(match[1]);
    const seconds = Number(match[2]);
    const content = match[3].trim();
    if (!content && content !== '0') return;
    const time = minutes * 60 + seconds;
    entries.push({ time, text: content });
  });
  entries.sort((a, b) => a.time - b.time);
  return entries;
}

async function loadLyrics(track) {
  state.lyrics = [];
  state.currentLyricIndex = -1;
  const cacheKey = track.lyricsFile || track.title;
  const applyLyrics = (parsed) => {
    if (!parsed || !parsed.length) return false;
    state.lyrics = parsed;
    lyricsCache.set(cacheKey, parsed);
    renderLyricWindow(0);
    const current = elements.audio ? elements.audio.currentTime || 0 : 0;
    updateLyricByTime(current);
    return true;
  };

  if (!track.lyricsFile && !track.lyricsInline) {
    showLyricPlaceholder('暂无歌词文件');
    return;
  }

  const isFileProtocol = window.location.protocol === 'file:';
  if (isFileProtocol && track.lyricsInline) {
    // 在 file:// 打开时直接使用内联歌词，避免浏览器阻止本地文件的跨源请求。
    if (applyLyrics(parseLRC(track.lyricsInline))) return;
    showLyricPlaceholder('歌词加载失败');
    return;
  }
  if (isFileProtocol && !track.lyricsInline) {
    showLyricPlaceholder('请通过本地服务器打开以加载歌词');
    return;
  }

  if (lyricsCache.has(cacheKey)) {
    applyLyrics(lyricsCache.get(cacheKey));
    return;
  }
  showLyricPlaceholder();
  try {
    if (track.lyricsFile) {
      const response = await fetch(track.lyricsFile);
      const text = await response.text();
      if (applyLyrics(parseLRC(text))) {
        return;
      }
    }
  } catch (error) {
    console.error('歌词加载失败', error);
  }
  if (applyLyrics(track.lyricsInline ? parseLRC(track.lyricsInline) : null)) {
    return;
  }
  showLyricPlaceholder(track.lyricsFile ? '歌词加载失败' : '暂无歌词');
}

function renderLyricWindow(centerIndex = 0, fallbackLines = null) {
  const container = elements.lyricsList;
  container.innerHTML = '';
  const source = fallbackLines || state.lyrics;
  if (!source.length) {
    showLyricPlaceholder('暂无歌词');
    return;
  }
  const activeIndex = Math.max(0, Math.min(centerIndex, source.length - 1));
  const windowSize = 6;
  const start = Math.max(0, activeIndex - 2);
  const end = Math.min(source.length, start + windowSize);
  for (let i = start; i < end; i += 1) {
    const li = document.createElement('li');
    li.textContent = source[i].text || source[i];
    li.className = 'lyric-line visible';
    if (!fallbackLines && i === activeIndex) {
      li.classList.add('current');
    }
    container.appendChild(li);
  }
  if (!fallbackLines) {
    state.currentLyricIndex = activeIndex;
  }
}

function updateLyricByTime(currentTime) {
  if (!state.lyrics.length) return;
  let idx = state.currentLyricIndex;
  if (idx < 0 || currentTime < state.lyrics[idx].time) {
    idx = 0;
  }
  while (idx + 1 < state.lyrics.length && currentTime >= state.lyrics[idx + 1].time - 0.2) {
    idx += 1;
  }
  while (idx > 0 && currentTime < state.lyrics[idx].time - 0.2) {
    idx -= 1;
  }
  if (idx !== state.currentLyricIndex) {
    renderLyricWindow(idx);
  }
}

function loadTrack(index) {
  const track = playlist[index];
  if (!track) return;
  state.currentIndex = index;
  applyTheme(track.theme);
  const resolvedUrl = new URL(track.url, window.location.href).href;
  if (elements.audio) {
    elements.audio.src = resolvedUrl;
  }
  if (elements.audioSource) {
    elements.audioSource.src = resolvedUrl;
  }
  elements.audio.load();
  elements.title.textContent = track.title;
  elements.artist.textContent = track.artist;
  elements.album.textContent = track.album;
  elements.cover.src = track.cover;
  elements.duration.textContent = formatTime(track.duration);
  elements.progress.value = 0;
  elements.currentTime.textContent = '00:00';
  applyPlaybackRateFromUI();
  loadLyrics(track);
  updateStatusLabel();
}

async function togglePlayback() {
  if (!elements.audio.currentSrc) {
    loadTrack(state.currentIndex);
  }
  if (state.isPlaying) {
    elements.audio.pause();
    return;
  }
  try {
    await elements.audio.play();
    state.isPlaying = true;
  } catch (err) {
    console.warn('自动播放被浏览器阻止，可手动点击播放', err);
    return;
  }
  elements.toggle.textContent = '⏸';
  elements.toggle.setAttribute('aria-label', '暂停');
  elements.disc.classList.add('is-playing');
  updateStatusLabel();
}

function playTrack(index) {
  loadTrack(index);
  elements.audio
    .play()
    .then(() => {
      state.isPlaying = true;
      elements.toggle.textContent = '⏸';
      elements.toggle.setAttribute('aria-label', '暂停');
      elements.disc.classList.add('is-playing');
      updateStatusLabel();
    })
    .catch((err) => {
      console.warn('播放失败', err);
    });
}

function nextTrack() {
  const nextIndex = (state.currentIndex + 1) % playlist.length;
  playTrack(nextIndex);
}

function prevTrack() {
  const prevIndex = (state.currentIndex - 1 + playlist.length) % playlist.length;
  playTrack(prevIndex);
}

function handleTimeUpdate() {
  const { currentTime, duration } = elements.audio;
  const track = playlist[state.currentIndex];
  const total = Number.isFinite(duration) ? duration : track.duration;
  if (!Number.isFinite(total) || total <= 0) return;
  const percent = (currentTime / total) * 100;
  elements.progress.value = percent;
  elements.currentTime.textContent = formatTime(currentTime);
  elements.duration.textContent = formatTime(total);
  updateLyricByTime(currentTime);
}

function handleProgressInput(event) {
  const { duration } = elements.audio;
  const track = playlist[state.currentIndex];
  const total = Number.isFinite(duration) && duration > 0 ? duration : track.duration;
  if (!Number.isFinite(total) || total <= 0) return;
  const value = Number(event.target.value);
  elements.audio.currentTime = (value / 100) * total;
  updateLyricByTime(elements.audio.currentTime);
}

function handleVolumeInput(event) {
  elements.audio.volume = Number(event.target.value);
}

function handleSpeedChange(event) {
  const value = Number(event.target.value);
  if (!Number.isFinite(value) || value <= 0) return;
  elements.audio.playbackRate = value;
  state.playbackRate = value;
  updateStatusLabel();
}

function bootstrap() {
  initStudentInfo();
  loadTrack(state.currentIndex);
  elements.audio.volume = Number(elements.volume.value) || 0.8;
}

bootstrap();

elements.toggle.addEventListener('click', () => {
  if (state.isPlaying) {
    elements.audio.pause();
  } else {
    togglePlayback();
  }
});

elements.prev.addEventListener('click', prevTrack);
elements.next.addEventListener('click', nextTrack);
elements.progress.addEventListener('input', handleProgressInput);
elements.volume.addEventListener('input', handleVolumeInput);
elements.speed.addEventListener('change', handleSpeedChange);

elements.audio.addEventListener('timeupdate', handleTimeUpdate);
elements.audio.addEventListener('ended', nextTrack);
elements.audio.addEventListener('play', () => {
  state.isPlaying = true;
  elements.toggle.textContent = '⏸';
  elements.toggle.setAttribute('aria-label', '暂停');
  elements.disc.classList.add('is-playing');
  updateStatusLabel();
});
elements.audio.addEventListener('pause', () => {
  state.isPlaying = false;
  elements.toggle.textContent = '▶';
  elements.toggle.setAttribute('aria-label', '播放');
  elements.disc.classList.remove('is-playing');
  updateStatusLabel();
});
elements.audio.addEventListener('error', () => {
  elements.status.textContent = '音频加载失败，请确认文件仍在同一目录或使用本地服务器预览';
});
