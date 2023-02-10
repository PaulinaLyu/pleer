import React, { useState } from "react";
import ButtonGroup from "./component/ButtonGroup/ButtonGroup";
import VolumeSlider from "./component/VolumeSlider/VolumeSlider";
import "./App.scss";

export function App() {
  const [volume, setVolume] = useState(50);
  const [muted, setMuted] = useState(false);
  const [bg, setBg] = useState<string>("sun");
  return (
    <div className={`app__container app__container--${bg}`}>
      <div className="app__container__wrapper"></div>
      <h1>
        <span>Weather s</span>
        <img className="h1__icon" src="icons/sun.svg" />
        <span>unds</span>
      </h1>
      <ButtonGroup volume={volume} muted={muted} setBg={setBg} />
      <VolumeSlider
        setVolume={setVolume}
        volume={volume}
        setMuted={setMuted}
        muted={muted}
      />
    </div>
  );
}
