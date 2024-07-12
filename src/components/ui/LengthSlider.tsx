import React from 'react';
import styled from 'styled-components';

interface LengthSliderProps {
  length: number;
  onChange: (value: number) => void;
}

const Slider = styled.input.attrs({ type: 'range' })<{ length: number }>`
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  outline: none;
  background: ${(props) =>
    `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${(props.length / 20) * 100}%, #18171F ${(props.length / 20) * 100}%, #18171F 100%)`};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 28px;
    height: 28px;
    background: #A4FFAF;
    border: 3px solid #A4FFAF;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s ease;
    transform: translateX(6px); /* Shift thumb to the right */
  }

  &::-webkit-slider-thumb:hover {
    background: #18171F;
  }

  &::-moz-range-thumb {
    width: 28px;
    height: 28px;
    background: #E6E5EA;
    border: 3px solid #E6E5EA;
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.3s ease;
    transform: translateX(6px); /* Shift thumb to the right */
  }

  &::-moz-range-thumb:hover {
    background: #18171F;
    border: 3px solid #A4FFAF;
  }
`;

const LengthSlider: React.FC<LengthSliderProps> = ({ length, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label htmlFor="length-slider" className="text-text-light">Character Length</label>
        <span className="text-accent-green lg:text-heading-l md:text-heading-l text-heading-m">{length}</span>
      </div>
      <Slider
        id="length-slider"
        min="1"
        max="20"
        value={length}
        onChange={(e) => onChange(parseInt(e.target.value))}
        length={length}
      />
    </div>
  );
};

export default LengthSlider;