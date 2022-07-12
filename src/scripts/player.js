const video = document.querySelector('#player');
const playBtn = document.querySelector('.video__player-img');
const playerPlayBtn = document.querySelector('.duration-img');
const durationControl = document.querySelector('#durationLevel');
const soundControl = document.querySelector('#micLevel');
const soundBtn = document.querySelector('#sound__btn');
const dynamicBtn = document.querySelector('#dynamic');
let intervalId;
let soundLvl;

// video.addEventListener('loadeddata', function () {

  video.addEventListener('click', playStop);

  let playButtons = document.querySelectorAll('.play');

  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener('click', playStop);
  }

  durationControl.min = 0;
  durationControl.value = 0;
  durationControl.max = video.duration;
  durationControl.addEventListener('input', setVideoDuration);

  soundControl.min = 0;
  soundControl.max = 10;
  soundControl.value = soundControl.max / 2;
  soundControl.addEventListener('input', changeSoundVolume);
  
  dynamicBtn.addEventListener('click', soundOffOn);

  video.addEventListener('ended', () => {
    playBtn.classList.toggle('video__player-img--active');
    playerPlayBtn.classList.remove('active');
    video.currentTime = 0;
  })
// });


function playStop() {
  playBtn.classList.toggle('video__player-img--active');
  playerPlayBtn.classList.toggle('active');

  if (video.paused) {
    video.play();
    intervalId = setInterval(updateDuration, 1000 / 60);
  } else {
    clearInterval(intervalId)
    video.pause();
  }
};

function setVideoDuration() {
  video.currentTime = durationControl.value;
  updateDuration();
}

function updateDuration() {
  durationControl.value = video.currentTime;
  let step = video.duration / 100;
  let percent = video.currentTime / step;
  durationControl.style.background = `linear-gradient(90deg, #fedb3f 0%, #fedb3f ${percent}%, #626262 ${percent}%)`;
}

function changeSoundVolume() {
  video.volume = soundControl.value / 10;
  if (video.volume === 0) {
    soundBtn.classList.add('active')
  } else {
    soundBtn.classList.remove('active')
  }
}

function soundOffOn() {
  if (video.volume === 0) {
    soundBtn.classList.remove('active')
    video.volume = soundLvl;
    soundControl.value = soundLvl * 10;
  } else {
    soundBtn.classList.add('active')
    soundLvl = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}

