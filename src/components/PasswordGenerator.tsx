import React, { useState } from "react";
import PasswordDisplay from "./ui/PasswordDisplay";
import LengthSlider from "./ui/LengthSlider";
import OptionsCheckbox from "./ui/OptionsCheckbox";
import StrengthIndicator from "./ui/StrengthIndicator";

const PasswordGenerator: React.FC = () => {
  const [password, setPassword] = useState("P4$5W0rD!");
  const [length, setLength] = useState(10);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength, setStrength] = useState<
    "NONE" | "TOO WEAK!" | "WEAK" | "MEDIUM" | "STRONG"
  >("MEDIUM");

  const generatePassword = () => {
    const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerSet = "abcdefghijklmnopqrstuvwxyz";
    const numberSet = "0123456789";
    const symbolSet = "!@#$%^&*()_+[]{}|;:',.<>?/~`";

    let characterSet = "";
    if (includeUpper) characterSet += upperSet;
    if (includeLower) characterSet += lowerSet;
    if (includeNumbers) characterSet += numberSet;
    if (includeSymbols) characterSet += symbolSet;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterSet.length);
      generatedPassword += characterSet[randomIndex];
    }

    setPassword(generatedPassword);
    calculateStrength(generatedPassword);
  };

  const calculateStrength = (password: string) => {
    let strengthScore = 0;
    const lengthCriteria = password.length >= 8;
    const upperCriteria = /[A-Z]/.test(password);
    const lowerCriteria = /[a-z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const symbolCriteria = /[!@#$%^&*()_+\-=[\]{}|;:',.<>?/~`]/.test(password);

    if (lengthCriteria) strengthScore++;
    if (upperCriteria) strengthScore++;
    if (lowerCriteria) strengthScore++;
    if (numberCriteria) strengthScore++;
    if (symbolCriteria) strengthScore++;

    if (strengthScore <= 1) {
      setStrength("TOO WEAK!");
    } else if (strengthScore === 2) {
      setStrength("WEAK");
    } else if (strengthScore === 3) {
      setStrength("MEDIUM");
    } else if (strengthScore === 4) {
      setStrength("STRONG");
    } else if (strengthScore === 5) {
      setStrength("STRONG");
    }
  };

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
          <StrengthIndicator strength={strength} />
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
