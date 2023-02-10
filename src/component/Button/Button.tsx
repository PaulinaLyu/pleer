import React, { useEffect, useRef, useState } from "react";
import "./Button.scss";

interface ButtonProps {
  img: string;
  svg: string;
  title: string;
  sound: string;
  volume: number;
  id: number;
  setCurrentTrack: React.Dispatch<React.SetStateAction<number>>;
  currentTrack: number;
  muted: boolean;
  code: string;
  setBg: React.Dispatch<React.SetStateAction<string>>;
}

const Button = (props: ButtonProps) => {
  const [isActive, setActive] = useState(false);
  const {
    img,
    svg,
    title,
    code,
    sound,
    volume,
    id,
    setCurrentTrack,
    currentTrack,
    muted,
    setBg,
  } = props;

  const audioElement: React.MutableRefObject<HTMLAudioElement> = useRef();

  const toggleActive = () => {
    setActive(!isActive);
    if (!isActive) {
      setCurrentTrack(id);
      audioElement.current?.play();
      setBg(code);
    } else {
      audioElement.current?.pause();
    }
  };

  useEffect(() => {
    audioElement.current.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    audioElement.current.muted = muted;
  }, [muted]);

  useEffect(() => {
    if (currentTrack !== id) {
      audioElement.current?.pause();
    }
  }, [currentTrack]);

  return (
    <button className="button__container" onClick={toggleActive}>
      <div className="button__container__wrapper"></div>
      <img className="button__img" src={img} alt={title} />
      <audio ref={audioElement} src={sound}></audio>
      <img className="button__svg" src={svg} />
    </button>
  );
};

export default Button;
