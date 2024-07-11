import React from 'react';
import '../css/LengthSlider.css';

interface LengthSliderProps {
  length: number;
  onChange: (value: number) => void;
}

const LengthSlider: React.FC<LengthSliderProps> = ({ length, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="length-slider" className="text-text-light">Character Length</label>
        <span className="text-accent-green lg:text-heading-l md:text-heading-l text-heading-m">{length}</span>
      </div>
      <input
        id="length-slider"
        type="range"
        min="1"
        max="20"
        value={length}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full appearance-none bg-bg-dark h-2 rounded-full outline-none"
        style={{
          background: `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${(length / 20) * 100}%, #18171F ${(length / 20) * 100}%, #18171F 100%)`
        }}
      />
    </div>
  );
};

export default LengthSlider;