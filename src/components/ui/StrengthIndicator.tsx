import React from 'react';

interface StrengthIndicatorProps {
  strength: 'NONE' | 'TOO WEAK!' | 'WEAK' | 'MEDIUM' | 'STRONG';
}

const StrengthIndicator: React.FC<StrengthIndicatorProps> = ({ strength }) => {
  const getStrengthColor = () => {
    switch (strength) {
      case 'TOO WEAK!': return 'bg-accent-red';
      case 'WEAK': return 'bg-accent-orange';
      case 'MEDIUM': return 'bg-accent-yellow';
      case 'STRONG': return 'bg-accent-green';
      case 'NONE': return 'bg-transparent';
    }
  };

  const getFilledBars = () => {
    switch (strength) {
      case 'NONE': return 0;
      case 'TOO WEAK!': return 1;
      case 'WEAK': return 2;
      case 'MEDIUM': return 3;
      case 'STRONG': return 4;
    }
  };

  return (
    <div className="bg-bg-dark p-4 flex justify-between items-center mb-6">
      <span className="text-text-light opacity-50">STRENGTH</span>
      <div className="flex items-center">
        <span className="text-text-light lg:text-heading-m md:text-heading-m text-body mr-4">{strength}</span>
        <div className="flex space-x-2">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`w-2 h-6 border-2 ${index < getFilledBars() ? getStrengthColor() : 'border-text-light bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StrengthIndicator;