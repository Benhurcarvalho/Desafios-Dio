
import { IButtonProps } from "./types";
import { ButtonContainer } from "./style";
import React from "react";

const Button = ({ title, onClick }: IButtonProps) => {
  return <ButtonContainer onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;