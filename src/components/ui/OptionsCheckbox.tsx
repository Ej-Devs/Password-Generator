import React from 'react';

interface OptionsCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const OptionsCheckbox: React.FC<OptionsCheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center mb-4 text-text-light cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
      <span 
        className={`w-5 h-5 mr-4 border-2 flex items-center justify-center transition-colors duration-300 ease-in-out '
            ${checked ? 'bg-accent-green border-accent-green' : 'border-text-light hover:border-accent-green'}`}
      >
        {checked && (
          <svg className="w-3 h-3 text-bg-main" viewBox="0 0 24 24">
            <path fill="currentColor" d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
};

export default OptionsCheckbox;