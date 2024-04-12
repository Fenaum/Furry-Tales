import React from "react";
import "./button.css"

interface ButtonProps {
  buttonLabel: string;
  onClick: () => void;
  className: string;
}

function Button({ buttonLabel, onClick, className }: ButtonProps) {
  return (
    <div>
      <button onClick={onClick} className={className}>{buttonLabel}</button>
    </div>
  );
}

export default Button;
