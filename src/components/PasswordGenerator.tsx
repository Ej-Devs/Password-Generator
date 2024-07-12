import React, { useState } from "react";
import PasswordDisplay from "./ui/PasswordDisplay";
import LengthSlider from "./ui/LengthSlider";
import OptionsCheckbox from "./ui/OptionsCheckbox";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [length, setLength] = useState(10);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    // Optionally, show a "Copied" message
  };

  return (
    <div className="bg-bg-dark min-h-screen">
      <div className="flex flex-col items-center justify-center font-jetbrains px-4 py-8">
        <h1 className="lg:text-heading-m md:text-heading-m text-body my-6 text-gray-text">
          Password Generator
        </h1>
        <div className="bg-bg-main px-8 py-4 mb-4 rounded-none w-full lg:max-w-lgScreen md:max-w-lgScreen max-w-smScreen">
          <PasswordDisplay password={password} onCopy={copyPassword} />
        </div>

        <div className="bg-bg-main p-8 rounded-none w-full lg:max-w-lgScreen md:max-w-lgScreen max-w-smScreen">
          <LengthSlider length={length} onChange={setLength} />
          <OptionsCheckbox
            label="Include Uppercase Letters"
            checked={includeUpper}
            onChange={setIncludeUpper}
          />
          <OptionsCheckbox
            label="Include Lowercase Letters"
            checked={includeLower}
            onChange={setIncludeLower}
          />
          <OptionsCheckbox
            label="Include Numbers"
            checked={includeNumbers}
            onChange={setIncludeNumbers}
          />
          <OptionsCheckbox
            label="Include Symbols"
            checked={includeSymbols}
            onChange={setIncludeSymbols}
          />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
