import React from 'react'
import Button from './Button'
import chromeIcon from '../assets/chrome.png';
import userIcon from '../assets/user.png';
import downArrow from '../assets/arrow.svg';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

    const addToChrome = () => {
      alert("added to chrome")
    };
    const handleUpgrade = () => {
      alert("upgrade")
    };
  return (
    <header>
        <Button onClick={addToChrome} textColor="#4B4B4B" color="#FFF" borderColor="#DFDFDF" fontWeight="500">
            <img src={chromeIcon} alt="Chrome" style={{ marginRight: '11px', width: '16px' }} /> 
            {t('Add to Chrome')}
        </Button>
        <Button onClick={handleUpgrade} fontWeight="600">{t('Upgrade to Pro')}</Button>
        <div className="user">
            <img src={userIcon} alt="user" className='userIcon'/> 
            <img src={downArrow} alt="arrow" className='downArrow'/> 
        </div>
    </header>
  )
}

export default Header