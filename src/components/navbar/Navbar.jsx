import './navbar.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import TimerCount from '../TimeCounter/TimerCount';
import logo from '../../assets/ped.png';

// const backend = 'http://127.0.0.1:8000';
const backend = 'https://dee-server.onrender.com';

const Navbar = () => {
  const Navigate = useNavigate();

  const clearConversation = async () => {
    try {
      const response = await axios.get(`${backend}/clear`);

      if (response && response.status === 200) {
        Navigate('/');
      } else {
        console.log('An error has occured with the api request');
        return;
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img
            style={{ height: '40px', width: '40px' }}
            src={logo}
            alt="logo"
          />
        </div>
      </div>
      <div className="gpt3__navbar-timer">
        <TimerCount />
      </div>
      <div className="gpt3__navbar-sign">
        <button onClick={clearConversation} type="button">
          Close
        </button>
      </div>
    </div>
  );
};

export default Navbar;
