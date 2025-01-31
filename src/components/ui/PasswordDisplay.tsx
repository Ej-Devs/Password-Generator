import React from 'react';
import { FaRegCopy } from 'react-icons/fa';

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
  copied: boolean;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy, copied }) => {
  const displayPassword = password || "P4$5W0rD!";
  const isPlaceholder = !password;

  return (
    <div className="bg-bg-main flex justify-between items-center">
      <span className={`lg:text-heading-l md:text-heading-l text-heading-m ${isPlaceholder ? 'text-gray-text' : 'text-text-light'}`}>
        {displayPassword}
      </span>
      <div className="flex items-center space-x-2">
      {copied && <span className="text-accent-green mr-2">COPIED</span>}
        <button
          onClick={onCopy}
          disabled={isPlaceholder}
          className={`lg:w-[21px] md:w-[21px] w-[24px] lg:h-[24px] md:h-[24px] h-[24px] text-accent-green hover:text-white transition-colors ${isPlaceholder ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        >
          <FaRegCopy size={24} />
        </button>
      </div>
    </div>
  );
};

export default PasswordDisplay;