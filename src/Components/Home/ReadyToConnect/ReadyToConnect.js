import './ReadyToConnect.css';
import textData from '../../../textData'

function ReadyToConnect() {
  return (
    <div className="ReadyToConnect">
      <div className = "innerBoxTitleAndPara">
        <h1>{textData.readyToConnect}</h1>
        <p>{textData.readyToConnectPara}</p>
      </div>

      <div className = "innerBoxNumberTitleAndPara">
        <div>
          <h1 id="index">01</h1>
        </div>
        <div>
          <h1>{textData.clarifyGoals}</h1>
          <p>{textData.clarifyGoalsPara}</p>
        </div>
      </div>

      <div className = "innerBoxNumberTitleAndPara">
        <div>
          <h1 id="index">02</h1>
        </div>
        <div>
          <h1>{textData.exploreMentor}</h1>
          <p>{textData.exploreMentorPara}</p>
        </div>
      </div>

      <div className = "innerBoxNumberTitleAndPara">
        <div>
          <h1 id="index">03</h1>
        </div>
        <div>
          <h1>{textData.prepareToMeet}</h1>
          <p>{textData.prepareToMeetPara}</p>
        </div>
      </div>

    </div>
  );
}

export default ReadyToConnect;
