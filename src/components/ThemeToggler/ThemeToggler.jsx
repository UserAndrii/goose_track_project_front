import { useState } from 'react';

import CustomToggle from '../CustomToggle';
import { saveLocal, loadLocal } from './localStorage';

const thema = loadLocal('isLightTheme');

const ThemeToggler = () => {
  const [isLightTheme, setIsLightTheme] = useState(thema);

  if (!thema) {
    saveLocal('isLightTheme', isLightTheme);
  }

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

// saveLocal('isLightTheme', isLightTheme);

// function changeTheme() {

//   if (isLightTheme) {
//     refs.link.disabled = false;
//   }
//   if (this.dataset.theme === Theme.light) {
//     refs.link.disabled = true;
//   }
// }

// const thema = localStorage.getItem('isLightTheme');

// console.log(thema);

// if (!thema) {
//   localStorage.setItem('isLightTheme', JSON.stringify(isLightTheme));
// }

// const currentThema = JSON.parse(thema);
// console.log(currentThema);
