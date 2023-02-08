import React from "react";
import data from "../../data";
import Button from "../Button/Button";
import "./ButtonGroup.scss";

const ButtonGroup = () => {
  return (
    <section className="button-group__container">
      {data.map((item) => {
        return <Button src={item.src} title={item.title} key={item.id} />;
      })}
    </section>
  );
};

export default ButtonGroup;
