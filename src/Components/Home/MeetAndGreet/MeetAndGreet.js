import './MeetAndGreet.css';
import textData from '../../../textData'
import logos from '../../logos/logos'

function MeetAndGreet() {
  return (
    <div className="MeetAndGreet">
      <div className="leftPartHome">
        <h1>{textData.meetAndGreet}</h1>
        <p>{textData.meetAndGreetPara}</p>
        <div className="meetAndGreetButton">
          <button>{textData.scheduleAMeet}</button>
        </div>
        <div className="schoolLogo">
          {logos.map((logo, index) => (
            <img key={index} src={logo} className="logos" />
          ))}
        </div>
      </div>

      <div className="rightPartHome">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/indian-cleaning-man-with-namaste-hand-gesture-2656057-2209997.png" />
      </div>
    </div>
  );
}

export default MeetAndGreet;
