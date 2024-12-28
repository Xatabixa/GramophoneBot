const player = document.querySelector('.player'),
      album_img = document.querySelector('#album_img'),
      now_playing_label = document.querySelector('.now_playing_label'),
      music_name_playing = document.querySelector('#music_name_playing'),
      song_slider = document.querySelector('.song_slider'),
      audio = document.querySelector('.audio'),
      imgSrc = document.querySelector('.img__src'),
      playBtn = document.querySelector('.play'),
      prevBtn = document.querySelector('.prev'),
      nextBtn = document.querySelector('.next')

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
    audio.play()
}

// Pause
function pauseSong() {
    player.classList.remove('play')
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