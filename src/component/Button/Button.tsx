import React, { useEffect, useRef, useState } from "react";
import "./Button.scss";
import ReactLogo from "../../../public/icons/file.svg";
// import defaultExport, { ReactComponent as TestComponent } from "./rain.svg";

interface ButtonProps {
  img: string;
  svg?: string;
  title: string;
  sound: string;
  volume: number;
  id: number;
  setCurrentTrack: (value: number) => void;
  currentTrack: number;
}

const Button = ({ img, svg, title, sound, volume, id, setCurrentTrack, currentTrack }: ButtonProps) => {
  const [isActive, setActive] = useState(false);

  const audioElement: React.MutableRefObject<HTMLAudioElement> = useRef();

  const toggleActive = () => {
    setActive(!isActive);
    if (!isActive) {
      console.log("Play");
      setCurrentTrack(id);
      debugger;
      audioElement.current?.play();
    } else {
      audioElement.current?.pause();
      debugger;
    }
  };

  useEffect(() => {
    console.log(volume);
    debugger;
    audioElement.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    if (currentTrack !== id) {
      debugger;
      audioElement.current?.pause();
    }
  }, [currentTrack]);

  return (
    <button className="button__container" onClick={toggleActive}>
      <img className="button__img" src={img} alt={title} />
      <audio ref={audioElement} src={sound}></audio>
      <img className="button__svg" src={svg} alt={`${title} svg`} />
      {/* <ReactLogo /> */}
    </button>
  );
};

export default Button;
