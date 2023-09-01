import { useState } from 'react';

import CustomToggle from '../CustomToggle';
import { saveLocal, loadLocal } from './localStorage';

const thema = loadLocal('isLightTheme') ?? true;

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(thema);

  saveLocal('isLightTheme', isLightTheme);

  const handleClick = () => {
    setIsLightTheme(prev => {
      const newTheme = !prev;
      saveLocal('isLightTheme', newTheme);
      return newTheme;
    });
  };

  return (
    <CustomToggle
      isLightTheme={isLightTheme}
      handleClick={() => handleClick()}
    />
  );
};

export default ThemeToggler;
