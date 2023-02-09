import React, { useState } from "react";
import data from "../../data";
import Button from "../Button/Button";
import "./ButtonGroup.scss";

interface ButtonGroupProps {
  volume: number;
}

const ButtonGroup = ({ volume }: ButtonGroupProps) => {
  const [currentTrack, setCurrentTrack] = useState(0);
  return (
    <section className="button-group__container">
      {data.map((item) => {
        return <Button sound={item.sound} id={item.id} img={item.img} title={item.title} key={item.id} volume={volume} setCurrentTrack={setCurrentTrack} currentTrack={currentTrack} />;
      })}
    </section>
  );
};

export default ButtonGroup;
