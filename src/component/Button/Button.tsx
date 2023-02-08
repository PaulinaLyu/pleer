import React from "react";
import "./Button.scss";

interface Button {
  src: string;
  svg?: string;
  title: string;
}

const Button = ({ src, svg, title }: Button) => {
  return (
    <div className="button__container">
      <img className="button__img" src={src} alt={title} />
    </div>
  );
};

export default Button;
