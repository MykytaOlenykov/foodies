import React from "react";
import css from "./Hero.module.css";
import { Button } from "../Button/Button.jsx";

const Hero = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className={css.hero}>
      <h1 className={css.title}>{title}</h1>
      <h2 className={css.subtitle}>{subtitle}</h2>
      <Button
        onClick={onButtonClick}
        variant="transparent"
        size="medium"
        bordered={true}
        type="button"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Hero;
