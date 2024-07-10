import React from 'react';

interface IBtn {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IBtn> = ({ children, className, onClick }) => {
  return (
    <button
      className={`text-darkGrey px-[32px] transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;