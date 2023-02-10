import React, { useState } from "react";
import data from "../../data";
import Button from "../Button/Button";
import "./ButtonGroup.scss";

interface ButtonGroupProps {
  volume: number;
  muted: boolean;
  setBg: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonGroup = ({ volume, muted, setBg }: ButtonGroupProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  return (
    <section className="button-group__container">
      {data.map((item) => {
        return (
          <Button
            sound={item.sound}
            svg={item.svg}
            code={item.code}
            id={item.id}
            img={item.img}
            title={item.title}
            key={item.id}
            volume={volume}
            setCurrentTrack={setCurrentTrack}
            currentTrack={currentTrack}
            muted={muted}
            setBg={setBg}
          />
        );
      })}
    </section>
  );
};

export default ButtonGroup;
