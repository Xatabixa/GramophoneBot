const player = document.querySelector('#player'),
      album_img = document.querySelector('#album_img'),
      now_playing_label = document.querySelector('.now_playing_label'),
      music_name_playing = document.querySelector('#music_name_playing'),
      progressContainer = document.querySelector('.progress__container'),
      progress = document.querySelector('.song_slider'),
      audio = document.querySelector('.audio'),
      imgSrc = document.querySelector('.img__src'),
      playBtn = document.querySelector('.btn_play'),
      prevBtn = document.querySelector('.btn_prev'),
      nextBtn = document.querySelector('.btn_next')

//Названия песен
const songs = ['5opka - Сен-Тропе', '5opka - Спасибо босс']

let songIndex = 0

// Init
function loadSong(song) {
    music_name_playing.innerHTML = song
    audio.src = `audio/${song}.mp3`
    album_img.src = `albums_imgs/cover${songIndex + 1}.png`
}
loadSong(songs[songIndex])

// Play
function playSong() {
    player.classList.add('play')
    imgSrc.src = '/imgs/pause.png'
    audio.play()
}

// Pause
function pauseSong() {
    player.classList.remove('play')
    imgSrc.src = '/imgs/play.png'
    audio.pause()
}
playBtn.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play')
    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

// Next song
function nextSong() {
    songIndex++

    if(songIndex > songs.length -1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playSong()
}
nextBtn.addEventListener('click', nextSong)

// Prev song
function prevSong() {
    songIndex--

    if(songIndex <0) {
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])
    playSong()
}
prevBtn.addEventListener('click', prevSong)

// Progress bar
function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const ProgressPercent = (currentTime / duration) * 100
    progress.style.width = `${ProgressPercent}%`
}
audio.addEventListener('timeupdate', updateProgress)

// Set progress
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progressContainer.addEventListener('click', setProgress)

// Autoplay
audio.addEventListener('ended', nextSong)