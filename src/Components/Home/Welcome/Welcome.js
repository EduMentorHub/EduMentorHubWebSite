import './Welcome.css';
import textData from '../../../textData'

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
          <button id="diffColorButton">{textData.findAMentor}</button>
          <button>{textData.aboutUs}</button>
        </div>

      </div>

      <div className="rightPartHome">
        <img src="https://en.pimg.jp/031/925/228/1/31925228.jpg" />
      </div>
    </div>
  );
}

export default Welcome;
