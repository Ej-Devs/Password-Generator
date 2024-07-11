import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  return (
    <div className="bg-bg-main flex justify-between items-center">
      <span className="text-text-light lg:text-heading-l md:text-heading-l text-heading-m">{password}</span>
      <button onClick={onCopy} className="lg:w-[21px] md:w-[21px] w-[24px] lg:h-[24px] md:h-[24px] h-[24px] text-accent-green hover:text-white transition-colors">
        <FaRegCopy size={24} />
      </button>
    </div>
  );
};

export default PasswordDisplay;