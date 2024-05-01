import React from 'react';

import { useNavigate } from 'react-router-dom';

import ai from '../../assets/ai.png';
import logo from '../../assets/logo_uk.PNG';
import './home.css';

const Home = () => {
  const Navigate = useNavigate();

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Start a conversation with Dee...</h1>
        <p>
          Hello! I'm Dee, your dedicated voice assistance chatbot designed to
          guide you through neonatal resuscitation procedures. Feel free to ask
          me anything related to neonatal resuscitation. I'm equipped with
          up-to-date knowledge and guidelines to ensure that you receive
          accurate and helpful information.
        </p>
        <div className="gpt3__header-content__input">
          <button onClick={() => Navigate('/bot')} type="button">
            {' '}
            Let's get Started
          </button>
        </div>
        <p>Adopted from Resuscitation Council; UK.</p>
        <div className="gpt3__header-content__input">
          <img src={logo} alt="Resuscitation Council; UK" />
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>
    </div>
  );
};

export default Home;
