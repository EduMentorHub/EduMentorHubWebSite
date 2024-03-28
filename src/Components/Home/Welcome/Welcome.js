import './Welcome.css';
import textData from '../../../textData'
import welcome from '../../Images/welcome.png'
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="Welcome">

      <div className="leftPartHome">
        <div className="homeTitle">
          <span className="firstPartTitle">Your Next Chapter Begins Here - </span> 
          <span className="secondPartTitle">Elevating Aspirations, Fulfilling Dreams </span>
          <div className="homePara">
            <span className="firstPartPara">{textData.homePageAbout} </span> - all for free
          </div>
        </div>

        <div className="homeButton">
          <Link to="/find-a-mentor" style={{color:'black', textDecoration: 'none' }} >
            <button id="diffColorButton">{textData.findAMentor}</button>
          </Link>
          <Link to="/about" style={{color:'black', textDecoration: 'none' }}>
            <button>{textData.aboutUs}</button>
          </Link>
        </div>

      </div>

      <div className="rightPartHome">
        <img src={welcome} />
      </div>
    </div>
  );
}

export default Welcome;
