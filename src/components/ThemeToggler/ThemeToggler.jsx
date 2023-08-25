import { useState } from 'react';
import { MoonBtn, SunBtn } from './ThemeToggler.styled';

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  return isLightTheme ? (
    <MoonBtn onClick={() => setIsLightTheme(false)} />
  ) : (
    <SunBtn onClick={() => setIsLightTheme(true)} />
  );
};

export default ThemeToggler;
