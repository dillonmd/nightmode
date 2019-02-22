import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import './Nightmode.css';

library.add(faMoon);

// Night Mode Toggle

function nightToggle() {
    if (document.body.className === "") {
    document.body.className = "dark";
    }
        else {
            document.body.className = "";
        }
}

//Night Mode Button
class NightMode extends Component {
  render(){ 
      return (
          <button 
          id="nightmode"
          className="night-btn"
          onClick={nightToggle}
          >
              <FontAwesomeIcon icon="moon" />
          </button>
      );
      }
    }

  export default NightMode;
