import './Button.scss';
import { FC } from 'react';

type ButtonProps = {
  buttonTitle: string
  onClick?: () => void
}

const Button:FC<ButtonProps> = ({ buttonTitle, onClick }) => (
  <button
    className="button"
    onClick={onClick}
  >
    {buttonTitle}
  </button>
);

export default Button;
