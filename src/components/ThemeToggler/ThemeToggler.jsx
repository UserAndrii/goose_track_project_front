import { useEffect } from 'react';

import CustomToggle from '../CustomToggle';
import { saveLocal } from './localStorage';

const ThemeToggler = ({ isLightTheme, setIsLightTheme }) => {
  saveLocal('isLightTheme', isLightTheme);

  const handleClick = () => {
    setIsLightTheme(prev => {
      const newTheme = !prev;
      saveLocal('isLightTheme', newTheme);

      return newTheme;
    });
  };

  useEffect(() => {
    if (isLightTheme) {
      document.body.removeAttribute('dark');
    } else {
      document.body.setAttribute('dark', '');
    }
  }, [isLightTheme]);

  return (
    <CustomToggle
      isLightTheme={isLightTheme}
      handleClick={() => handleClick()}
    />
  );
};

export default ThemeToggler;
