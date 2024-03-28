import './MeetAndGreet.css';
import textData from '../../../textData'
import logos from '../../logos/logos'
import meetAndGreet from '../../Images/meetAndGreet.png'
import { Link } from 'react-router-dom';

function MeetAndGreet() {
  return (
    <div className="MeetAndGreet">
      <div className="leftPartHome">
        <h1>{textData.meetAndGreet}</h1>
        <p>{textData.meetAndGreetPara}</p>
        <div className="meetAndGreetButton">
          <Link to="/find-a-mentor" style={{color:'black', textDecoration: 'none' }} >
            <button>{textData.scheduleAMeet}</button>
          </Link>
        </div>
        <div className="schoolLogo">
          {logos.map((logo, index) => (
            <img key={index} src={logo} className="logos" />
          ))}
        </div>
      </div>

      <div className="rightPartHome">
        <img src={meetAndGreet} />
      </div>
    </div>
  );
}

export default MeetAndGreet;
