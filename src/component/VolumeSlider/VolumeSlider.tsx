import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./VolumeSlider.scss";

interface VolumeSliderProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
  muted: boolean;
  setMuted: React.Dispatch<React.SetStateAction<boolean>>;
}

const VolumeSlider = (props: VolumeSliderProps) => {
  const { volume, setVolume, setMuted, muted } = props;
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rangeRef.current) {
      rangeRef.current.style.width = `${volume}%`;
    }
  }, [volume]);

  return (
    <section className="slider__container">
      <button className="slider__btn" onClick={() => setMuted((m) => !m)}>
        <img src={muted ? "icons/muted.svg" : "icons/volume.svg"} />
      </button>
      <div className="slider">
        <div className="slider__body">
          <input
            className="thumb slider__body"
            type="range"
            min={0}
            max={100}
            step={10}
            value={volume}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setVolume(event.target.valueAsNumber);
            }}
          />
          <div className="slider__body__track">
            <div></div>
          </div>
          <div ref={rangeRef} className="slider__body__range"></div>
        </div>
      </div>
    </section>
  );
};

export default VolumeSlider;
