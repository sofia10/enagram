import React, { useState } from 'react'
import Menu from './Menu'
import MainContent from './MainContent';
import logo from '../assets/owl.svg';

const Home = () => {
  const [activeTab, setActiveTab] = useState('content1');

  return (
    <main className='home'>
        <Menu setActiveTab={setActiveTab}/>
        <div className='home-block'>
          <MainContent activeTab={activeTab} />
          <img src={logo} className="logo" alt="logo" />
        </div>
    </main>
  )
}

export default Home