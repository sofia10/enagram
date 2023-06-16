import React from 'react'
import Button from './Button'
import Editor from './Editor';
import { useTranslation } from 'react-i18next';
import LanguageDropdown from './LanguageDropdown';

const MainContent = ({ activeTab }) => {

    const { t } = useTranslation();

    const handleCheck = () => {
        alert("checked");
    };

  return (
    <div style={{height: '100%'}}>
        {activeTab === 'content1' && 
            <div style={{height: '100%'}}>
                <div className="home-top">
                    <div className="row">
                        <Button onClick={handleCheck} fontWeight="600">
                        <svg width="16" height="12" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.97244 9.39912C7.35983 9.77268 7.97338 9.77266 8.36075 9.39909L17.6967 0.395562C18.084 0.0220803 18.6973 0.0219553 19.0848 0.395279L19.2944 0.597295C19.7025 0.990502 19.7026 1.64388 19.2947 2.03723L8.36075 12.5807C7.97337 12.9542 7.35985 12.9542 6.97247 12.5807L0.988448 6.81035C0.580629 6.41709 0.58063 5.76391 0.988449 5.37066L1.19747 5.1691C1.58485 4.79556 2.19837 4.79556 2.58575 5.1691L6.97244 9.39912Z" fill="white"/>
                        </svg>
                        Check
                        </Button>
                        <div className='btns-row'>
                            <button className='copyBtn'>
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4V1C4 0.734784 4.10536 0.48043 4.29289 0.292893C4.48043 0.105357 4.73478 0 5 0H17C17.2652 0 17.5196 0.105357 17.7071 0.292893C17.8946 0.48043 18 0.734784 18 1V15C18 15.2652 17.8946 15.5196 17.7071 15.7071C17.5196 15.8946 17.2652 16 17 16H14V19C14 19.552 13.55 20 12.993 20H1.007C0.875127 20.0008 0.744397 19.9755 0.622322 19.9256C0.500247 19.8757 0.389233 19.8022 0.295659 19.7093C0.202084 19.6164 0.127793 19.5059 0.0770543 19.3841C0.0263156 19.2624 0.000129374 19.1319 0 19L0.00300002 5C0.00300002 4.448 0.453 4 1.01 4H4ZM2.003 6L2 18H12V6H2.003ZM6 4H14V14H16V2H6V4Z" fill="#2D62ED"/>
                                </svg>
                                {t('Copy')}
                            </button>
                            <Button textColor="#606060" color="transparent" borderColor="transparent" fontWeight="400">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 4H20V6H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V6H0V4H5V1C5 0.734784 5.10536 0.48043 5.29289 0.292893C5.48043 0.105357 5.73478 0 6 0H14C14.2652 0 14.5196 0.105357 14.7071 0.292893C14.8946 0.48043 15 0.734784 15 1V4ZM16 6H4V18H16V6ZM7 9H9V15H7V9ZM11 9H13V15H11V9ZM7 2V4H13V2H7Z" fill="#606060"/>
                                </svg>
                                
                                {t('Delete')}
                            </Button>
                            <LanguageDropdown />
                        </div>
                    </div>
                </div>
                <Editor/>
            </div>
        }
        {activeTab === 'content2' && <div>2 Content</div>}
        {activeTab === 'content3' && <div>3 Content</div>}
    </div>
  )
}

export default MainContent