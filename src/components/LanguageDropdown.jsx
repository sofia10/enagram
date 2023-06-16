// LanguageDropdown.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import flagEn from '../assets//flags/en.png';
import flagKa from '../assets/flags/ka.png';
import downArrow from '../assets/down.svg';

const languageToFlag = {
  en: flagEn,
  ka: flagKa,
};

const languageNames = {
    en: "English",
    ka: "ქართული",
  };

function LanguageDropdown() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('en');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
    i18n.changeLanguage(value);
  };

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <img className='flagIcon' src={languageToFlag[selectedOption]} alt="Flag" />
        {languageNames[selectedOption] || "Select a Language"}
        <div className="arrow">
          {isOpen ? <img src={downArrow} alt="arrow" className="down-arrow"/> : <img src={downArrow} alt="arrow" className="down-arrow top"/>}
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <div className="dropdown-list">
            <div onClick={onOptionClicked("en")} className="option">
                <img src={flagEn} alt="" />
              English
            </div>
            <div onClick={onOptionClicked("ka")} className="option">
                <img src={flagKa} alt="" />
              ქართული
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LanguageDropdown;
