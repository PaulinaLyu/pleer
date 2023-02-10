import "./index.scss";

let volume = 50;
let mode = "sun";
let muted = false;
let isSunBtnActive = false;
let isRainBtnActive = false;
let isSnowBtnActive = false;

const app = document.getElementById("app");
const muteBtn = document.getElementById("mute-btn");
const muteIcon = document.getElementById("mute-icon");
const sliderRange = document.getElementById("slider-range");
const sliderInput = document.getElementById("slider-input");
const sunBtn = document.getElementById("sun-btn");
const rainBtn = document.getElementById("rain-btn");
const snowBtn = document.getElementById("snow-btn");
const sunAudioElem = document.getElementById("audioElement-sun");
const snowAudioElem = document.getElementById("audioElement-snow");
const rainAudioElem = document.getElementById("audioElement-rain");

const resetPrevMode = (newMode, prevMode, audioElem, isActive) => {
  app.classList.remove(`app__container--${prevMode}`);
  app.classList.add(`app__container--${newMode}`);
  audioElem.pause();
  isActive = false;
};

const muteOrUnmuteAudio = (svgPath, muted) => {
  muteIcon.src = svgPath;
  sunAudioElem.muted = muted;
  snowAudioElem.muted = muted;
  rainAudioElem.muted = muted;
};

const setVolume = (volume) => {
  sunAudioElem.volume = volume / 100;
  snowAudioElem.volume = volume / 100;
  rainAudioElem.volume = volume / 100;
};

const handleMuteBtnClick = function () {
  muted = !muted;
  const svg = muted ? "icons/muted.svg" : "icons/volume.svg";
  muteOrUnmuteAudio(svg, muted);
};

const handleSliderInputClick = function (event) {
  volume = event.target.valueAsNumber;
  sliderRange.style.width = `${event.target.valueAsNumber}%`;
  setVolume(event.target.valueAsNumber);
};

const handleSunBtnClick = function () {
  isSunBtnActive = !isSunBtnActive;

  if (isSunBtnActive) {
    if (mode === "rain") {
      resetPrevMode("sun", mode, rainAudioElem, isRainBtnActive);
    }
    if (mode === "snow") {
      resetPrevMode("sun", mode, snowAudioElem, snowAudioElem);
    }

    mode = "sun";
    sunAudioElem.play();
  } else {
    sunAudioElem.pause();
  }
};

const handleRainBtnClick = function () {
  isRainBtnActive = !isRainBtnActive;
  if (isRainBtnActive) {
    if (mode === "sun") {
      resetPrevMode("rain", mode, sunAudioElem, isSunBtnActive);
    }

    if (mode === "snow") {
      resetPrevMode("rain", mode, snowAudioElem, isSnowBtnActive);
    }
    mode = "rain";
    rainAudioElem.play();
  } else {
    rainAudioElem.pause();
  }
};

const handleSnowBtnClick = function () {
  isSnowBtnActive = !isSnowBtnActive;
  if (isSnowBtnActive) {
    if (mode === "sun") {
      resetPrevMode("snow", mode, sunAudioElem, isSunBtnActive);
    }

    if (mode === "rain") {
      resetPrevMode("snow", mode, rainAudioElem, isRainBtnActive);
    }

    mode = "snow";
    snowAudioElem.play();
  } else {
    snowAudioElem.pause();
  }
};

sliderInput.addEventListener("click", handleSliderInputClick);
sunBtn.addEventListener("click", handleSunBtnClick);
rainBtn.addEventListener("click", handleRainBtnClick);
snowBtn.addEventListener("click", handleSnowBtnClick);
muteBtn.addEventListener("click", handleMuteBtnClick);
