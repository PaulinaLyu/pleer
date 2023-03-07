import sunIcon from "./assets/icons/sun.svg";
import rainIcon from "./assets/icons/rain.svg";
import winterIcon from "./assets/icons/snow.svg";
import summerBg from "./assets/images/sunny-bg.jpg";
import rainyBg from "./assets/images/rain-bg.jpg";
import winterBg from "./assets/images/snow-bg.jpg";
import summerSound from "./assets/sounds/summer.mp3";
import rainSound from "./assets/sounds/rain.mp3";
import winterSound from "./assets/sounds/winter.mp3";

export default [
  {
    id: "14e7f2566",
    icon: sunIcon,
    background: summerBg,
    sound: summerSound,
  },
  {
    id: "0a75e6d8",
    icon: rainIcon,
    background: rainyBg,
    sound: rainSound,
  },
  {
    id: "9f2ade33",
    icon: winterIcon,
    background: winterBg,
    sound: winterSound,
  },
];
