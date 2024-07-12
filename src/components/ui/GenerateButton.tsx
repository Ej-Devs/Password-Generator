import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface GenerateButtonProps {
  onClick: () => void;
}

const GenerateButton: React.FC<GenerateButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-accent-green text-bg-main py-4 flex items-center justify-center space-x-2 hover:bg-transparent hover:text-accent-green border-2 border-accent-green transition-colors"
    >
      <span className="font-bold">GENERATE</span>
      <FaArrowRight />
    </button>
  );
};

export default GenerateButton;