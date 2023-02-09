import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import "./VolumeSlider.scss";

interface VolumeSliderProps {
  volume: number;
  setVolume: (value: number) => void;
}

const VolumeSlider = ({ volume, setVolume }: VolumeSliderProps) => {
  const [muted, setMuted] = useState(false);
  const rangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // if (volume === 1) {
    const minPercent = volume;

    if (rangeRef.current) {
      // rangeRef.current.style.right = `${minPercent}%`;
      rangeRef.current.style.width = `${minPercent}%`;
    }
    // }
  }, [volume]);

  return (
    <section className={`double-range-slider`}>
      {/* <div className={`double-range-slider`}> */}
      <div className={`slider`}>
        <input
          // className="volume-slider__body"
          className={`thumb slider thumb__right`}
          type="range"
          min={0}
          max={100}
          step={10}
          value={volume}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setVolume(event.target.valueAsNumber);
          }}
        />
        <div className="slider__track">
          <div className="slider__lyr_roadworks_works__0"></div>
        </div>
        <div ref={rangeRef} className="slider__range"></div>
      </div>
      {/* </div> */}
      {/* <button onClick={() => setMuted((m) => !m)}>{muted ? "muted" : "unmuted"}</button> */}
    </section>
  );
};

export default VolumeSlider;
