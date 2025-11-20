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
    url: './M500000DQxIe1FZ2v0.mp3',
    cover: 'cover.jpg',
    lyricsFile: '七友-梁汉文歌词.lrc'
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
  studentId: document.querySelector('[data-student-id]'),
  studentName: document.querySelector('[data-student-name]'),
  disc: document.querySelector('[data-disc]')
};

const state = {
  currentIndex: 0,
  isPlaying: false,
  lyrics: [],
  currentLyricIndex: -1
};

function initStudentInfo() {
  if (studentInfo.id) {
    elements.studentId.textContent = `学号：${studentInfo.id}`;
  }
  if (studentInfo.name) {
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
  elements.status.textContent = `${play} · 第 ${order} 首`;
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
  if (!track.lyricsFile) {
    showLyricPlaceholder('暂无歌词文件');
    return;
  }
  if (lyricsCache.has(track.lyricsFile)) {
    state.lyrics = lyricsCache.get(track.lyricsFile);
    renderLyricWindow(0);
    updateLyricByTime(elements.audio.currentTime || 0);
    return;
  }
  showLyricPlaceholder();
  try {
    const response = await fetch(track.lyricsFile);
    const text = await response.text();
    const parsed = parseLRC(text);
    if (!parsed.length) {
      showLyricPlaceholder('暂无歌词');
      return;
    }
    state.lyrics = parsed;
    lyricsCache.set(track.lyricsFile, parsed);
    renderLyricWindow(0);
    updateLyricByTime(elements.audio.currentTime || 0);
  } catch (error) {
    console.error('歌词加载失败', error);
    showLyricPlaceholder('歌词加载失败');
  }
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
  const resolvedUrl = new URL(track.url, window.location.href).href;
  if (elements.audioSource) {
    elements.audioSource.src = resolvedUrl;
  } else {
    elements.audio.src = resolvedUrl;
  }
  elements.audio.load();
  elements.title.textContent = track.title;
  elements.artist.textContent = track.artist;
  elements.album.textContent = track.album;
  elements.cover.src = track.cover;
  elements.duration.textContent = formatTime(track.duration);
  elements.progress.value = 0;
  elements.currentTime.textContent = '00:00';
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
  if (elements.audio.currentTime > 3) {
    elements.audio.currentTime = 0;
    return;
  }
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
