import data from "./data.js";
import summerBg from "./assets/images/sunny-bg.jpg";
import "./index.scss";

const btnGroupContainer = document.getElementById("btns-container-id");
const app = document.getElementById("app-id");
app.style.backgroundImage = `url('${summerBg}')`;
let playingMusicId;
const audioObj = new Audio();

// const resetPrevMode = (newMode, prevMode, audioElem, isActive) => {
//   app.classList.remove(`app__container--${prevMode}`);
//   app.classList.add(`app__container--${newMode}`);
//   audioElem.pause();
//   isActive = false;
// };

// const muteOrUnmuteAudio = (svgPath, muted) => {
//   muteIcon.src = svgPath;
//   sunAudioElem.muted = muted;
//   snowAudioElem.muted = muted;
//   rainAudioElem.muted = muted;
// };

// const setVolume = (volume) => {
//   sunAudioElem.volume = volume / 100;
//   snowAudioElem.volume = volume / 100;
//   rainAudioElem.volume = volume / 100;
// };

data.forEach((item) => {
  const btn = document.createElement("button");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const audio = document.createElement("audio");
  const icon = document.createElement("img");

  btn.classList.add("button__container");
  div.classList.add("button__container__wrapper");
  img.classList.add("button__img");
  icon.classList.add("button__svg");

  btn.dataset.itemId = item.id;
  img.src = item.background;
  audio.src = item.sound;
  icon.src = item.icon;

  btn.append(div);
  btn.append(img);
  btn.append(audio);
  btn.append(icon);
  btnGroupContainer.append(btn);
});

btnGroupContainer.addEventListener("click", ({ target }) => {
  console.log(target);
  debugger;
  const targetId = target.closest("[data-item-id]")?.dataset.itemId;
  if (!targetId) return;
  debugger;
  const item = data.find((i) => i.id === targetId);
  if (!item) return;
  debugger;
  if (playingMusicId !== item.id) {
    playingMusicId = item.id;
    audioObj.src = item.sound;
    audioObj.play();
    app.style.backgroundImage = `url('${item.background}')`;
    return;
  }
  debugger;

  if (audioObj.paused) {
    audioObj.play();
    debugger;
  } else {
    audioObj.pause();
  }
});

// <div class="button__container__wrapper"></div>
// <img class="button__img" src="images/sunny-day.jpg" alt="Sun music" />
// <audio id="audioElement-sun" src="sounds/summer.mp3"></audio>
// <img class="button__svg" src="icons/sun.svg" />

// // eslint-disable-next-line
// let volume = 50;
// let mode = "sun";
// let muted = false;
// let isSunBtnActive = false;
// let isRainBtnActive = false;
// let isSnowBtnActive = false;

// const app = document.getElementById("app");
// const muteBtn = document.getElementById("mute-btn");
// const muteIcon = document.getElementById("mute-icon");
// const sliderRange = document.getElementById("slider-range");
// const sliderInput = document.getElementById("slider-input");
// const sunBtn = document.getElementById("sun-btn");
// const rainBtn = document.getElementById("rain-btn");
// const snowBtn = document.getElementById("snow-btn");
// const sunAudioElem = document.getElementById("audioElement-sun");
// const snowAudioElem = document.getElementById("audioElement-snow");
// const rainAudioElem = document.getElementById("audioElement-rain");

// const resetPrevMode = (newMode, prevMode, audioElem, isActive) => {
//   app.classList.remove(`app__container--${prevMode}`);
//   app.classList.add(`app__container--${newMode}`);
//   audioElem.pause();
//   isActive = false;
// };

// const muteOrUnmuteAudio = (svgPath, muted) => {
//   muteIcon.src = svgPath;
//   sunAudioElem.muted = muted;
//   snowAudioElem.muted = muted;
//   rainAudioElem.muted = muted;
// };

// const setVolume = (volume) => {
//   sunAudioElem.volume = volume / 100;
//   snowAudioElem.volume = volume / 100;
//   rainAudioElem.volume = volume / 100;
// };

// const handleMuteBtnClick = () => {
//   muted = !muted;
//   const svg = muted ? "icons/muted.svg" : "icons/volume.svg";
//   muteOrUnmuteAudio(svg, muted);
// };

// const handleSliderInputClick = (event) => {
//   volume = event.target.valueAsNumber;
//   sliderRange.style.width = `${event.target.valueAsNumber}%`;
//   setVolume(event.target.valueAsNumber);
// };

// const handleSunBtnClick = () => {
//   isSunBtnActive = !isSunBtnActive;

//   if (isSunBtnActive) {
//     if (mode === "rain") {
//       resetPrevMode("sun", mode, rainAudioElem, isRainBtnActive);
//     }
//     if (mode === "snow") {
//       resetPrevMode("sun", mode, snowAudioElem, snowAudioElem);
//     }

//     mode = "sun";
//     sunAudioElem.play();
//   } else {
//     sunAudioElem.pause();
//   }
// };

// const handleRainBtnClick = () => {
//   isRainBtnActive = !isRainBtnActive;
//   if (isRainBtnActive) {
//     if (mode === "sun") {
//       resetPrevMode("rain", mode, sunAudioElem, isSunBtnActive);
//     }

//     if (mode === "snow") {
//       resetPrevMode("rain", mode, snowAudioElem, isSnowBtnActive);
//     }
//     mode = "rain";
//     rainAudioElem.play();
//   } else {
//     rainAudioElem.pause();
//   }
// };

// const handleSnowBtnClick = () => {
//   isSnowBtnActive = !isSnowBtnActive;
//   if (isSnowBtnActive) {
//     if (mode === "sun") {
//       resetPrevMode("snow", mode, sunAudioElem, isSunBtnActive);
//     }

//     if (mode === "rain") {
//       resetPrevMode("snow", mode, rainAudioElem, isRainBtnActive);
//     }

//     mode = "snow";
//     snowAudioElem.play();
//   } else {
//     snowAudioElem.pause();
//   }
// };

// sliderInput.addEventListener("click", handleSliderInputClick);
// sunBtn.addEventListener("click", handleSunBtnClick);
// rainBtn.addEventListener("click", handleRainBtnClick);
// snowBtn.addEventListener("click", handleSnowBtnClick);
// muteBtn.addEventListener("click", handleMuteBtnClick);
