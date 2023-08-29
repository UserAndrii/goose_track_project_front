import { useState } from 'react';
import { MoonBtn, SunBtn } from './ThemeToggler.styled';

import CustomToggle from '../CustomToggle';

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  // console.log(isLightTheme);

  return (
    <>
      <CustomToggle onClick={() => setIsLightTheme(!isLightTheme)} />
      {isLightTheme ? (
        <MoonBtn onClick={() => setIsLightTheme(false)} />
      ) : (
        <SunBtn onClick={() => setIsLightTheme(true)} />
      )}
    </>
  );
};

export default ThemeToggler;
