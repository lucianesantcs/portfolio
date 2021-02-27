import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  const { value, text, onClick } = props;
  return (
    <button value={value} className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
