import React, { useState } from "react";
import PasswordDisplay from "./ui/PasswordDisplay";
import LengthSlider from "./ui/LengthSlider";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [length, setLength] = useState(10);

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
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
