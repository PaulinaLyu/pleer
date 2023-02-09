import React, { useState } from "react";
import ButtonGroup from "./component/ButtonGroup/ButtonGroup";
import VolumeSlider from "./component/VolumeSlider/VolumeSlider";
import "./App.scss";

export function App() {
  const [volume, setVolume] = useState(50);
  return (
    <div className="app__container">
      <h1>Weather sounds</h1>
      <ButtonGroup volume={volume} />
      <VolumeSlider setVolume={setVolume} volume={volume} />
    </div>
  );
}
