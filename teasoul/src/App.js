import './App.css';
import Image from '@atlaskit/image';
import Button from '@atlaskit/button';
import teapot from './images/teapot.png'
import { Link } from "react-router-dom";



function TeaSoul() {
  return (
      <div className="home-container">
          <h1 id="welcome-text">Welcome To Tea Soul</h1>
          <Image id="teapot-image" src={teapot} alt="clay teapot"/>
              <h2 id="enter-page">Click To Start Brewing</h2>

      </div>
  );
}
export default TeaSoul;