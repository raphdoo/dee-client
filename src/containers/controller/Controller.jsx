import React, { useEffect, useState } from 'react';
import speech, { useSpeechRecognition } from 'react-speech-recognition';

import { Navbar } from '../../components';
import './controller.css';
import blueMic from '../../assets/mic-blue.png';
import redMic from '../../assets/voice-search.png';
// import chatbot from '../../assets/chatbot.png';

import dry_baby from '../../assets/dry_baby.jpg';
import facemask from '../../assets/facemask.PNG';
import inflation_breath from '../../assets/inflation_breath.jpeg';
import open_airway from '../../assets/open_airway.jpg';
import neutral_position from '../../assets/neutral_position.PNG';
import larygeal from '../../assets/laryngeal.PNG';
import mask from '../../assets/mask.PNG';
import two_support from '../../assets/two_support.PNG';
import cpr from '../../assets/cpr.png';
import ventilation from '../../assets/ventilation.jpg';
import baby from '../../assets/babyy.png';
import vascular from '../../assets/vascular.jpg';
import discuss from '../../assets/discuss.jpeg';

// const backend = 'http://127.0.0.1:8000';

const backend = 'https://dee-server.onrender.com';

const Controller = () => {
  const { listening, transcript } = useSpeechRecognition();
  const [response, setResponse] = useState(null);
  const [thinking, setThinking] = useState(false);

  const bot_handler = async () => {
    setThinking(true);
    const response = await fetch(`${backend}/bot-handler`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input_text: transcript }),
    });

    setThinking(false);

    const responseBody = await response.json();

    setResponse(responseBody);

    return responseBody;
  };

  // eslint-disable-next-line
  useEffect(() => {
    const handleBotResponse = async () => {
      if (!listening && transcript) {
        try {
          // Wait for the bot_handler Promise to resolve
          const response = await bot_handler();

          const synthesis = window.speechSynthesis;

          // Get the list of available voices
          const voices = synthesis.getVoices();

          // Find a female voice (you may need to adjust this based on the available voices)
          const femaleVoice = voices.find((voice) =>
            voice.name.includes('Female')
          );

          const utterance = new SpeechSynthesisUtterance(response);
          utterance.voice = femaleVoice;

          synthesis.speak(utterance);
        } catch (error) {
          console.error('Error handling bot response:', error);
        }
      }
    };

    handleBotResponse();
  }, [transcript, listening]);

  return (
    <div>
      <div className="overflow-y-hidden h-screen">
        <Navbar />
        <div className="content">
          <div className="image_content">
            {!response ? (
              <div className="image_container">
                <img src={baby} alt="baby" />
              </div>
            ) : (
              <div>
                <p>{response}</p>
                <div className="image_container">
                  {response.includes('cover the baby') && (
                    <img src={dry_baby} alt="Dry the Baby" />
                  )}
                  {response.includes('airway is open') && (
                    <img src={open_airway} alt="Open Airway" />
                  )}
                  {response.includes('neutral position') && (
                    <img src={neutral_position} alt="neutral position" />
                  )}
                  {response.includes('jaw support') && (
                    <img src={mask} alt="facemask" />
                  )}
                  {response.includes('inflation breaths') && (
                    <img src={inflation_breath} alt="inflation breaths" />
                  )}
                  {response.includes('head, and jaw position') && (
                    <img src={facemask} alt="Hean and Jaw support" />
                  )}
                  {response.includes('two person support') && (
                    <img src={two_support} alt="Two support" />
                  )}
                  {response.includes('laryngeal mask') && (
                    <img src={larygeal} alt="Laryngeal mask" />
                  )}
                  {response.includes(
                    'Synchronise 3 chest compressions to 1 ventilation'
                  ) && <img src={cpr} alt="cpr" />}
                  {response.includes('heart ventilation') && (
                    <img src={ventilation} alt="ventilation" />
                  )}
                  {response.includes('Consider Vascular access') && (
                    <img src={vascular} alt="vascular" />
                  )}
                  {response.includes(
                    'Consider stopping and discussing resuscitation'
                  ) && <img src={discuss} alt="discuss" />}
                </div>
              </div>
            )}
          </div>
          {!listening && !response && (
            <p>Send Dee a message to get started...</p>
          )}

          {listening && <p>Listening...</p>}

          {thinking && <p>Generating a response...</p>}
        </div>
        {/* <Footer handle_recording={handle_recording} /> */}
        {/* <Footer /> */}
        <div className="footer">
          <div
            className="micButton"
            onClick={() => {
              setResponse(null);
              speech.startListening();
            }}
          >
            {listening ? (
              <img src={redMic} alt="blue microphone" />
            ) : (
              <img src={blueMic} alt="red microphone" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controller;
