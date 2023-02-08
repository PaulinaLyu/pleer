import React from "react";
import ButtonGroup from "./component/ButtonGroup/ButtonGroup";
import VolumeSlider from "./component/VolumeSlider/VolumeSlider";
import "./App.scss";

export function App() {
  return (
    <div className="app__container">
      <h1>Weather sounds</h1>
      <ButtonGroup />
      <VolumeSlider />
    </div>
  );
}
