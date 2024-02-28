import './ApplyRoadmap.css';
import NavBar from '.././NavBar/NavBar'
import BottomBar from '.././BottomBar/BottomBar'
import ReadyToConnect from '.././Home/ReadyToConnect/ReadyToConnect'
import textData from '../../textData'
import transition from '../../transition'

function ApplyRoadmap() {

  const colors = ['#8FBAB1','#FCC69B', '#B5EAEA', '#F3B6C8', '#C4C4C4'];
  const fullSpaceIndexes = [10];

  return (
    <div>
      <div className="ApplyRoadmap">
        <div className="ApplyRoadmapTitle">
          <h1>{textData.applyRoadMapTitle}</h1>
          <p>{textData.applyRoadMapPara}<span id="boldText"> Best of luck with your applications!</span></p>
          <div className="applyRoadMapStepsDiv">
            {Object.entries(textData.applyRoadMapSteps).map(([stepTitle, stepDescription], index) => (
              <div id={index+1} className={`applyRoadMapSteps ${fullSpaceIndexes.includes(index + 1) ? 'fullSpace' : ''}`}
                  style={{ backgroundColor: colors[index % colors.length] }}
              >
                <h1>{index+1}. {stepTitle}</h1>
                <p>{stepDescription}{index + 1 === 10 && <span id="boldText">Congratulations on completing your application.🥳</span>}</p>
              </div>
            ))}
          </div>
          <div className="additionalTips">
            <h1>{textData.tipForSuccess}</h1>

            <div>
              {Object.entries(textData.tipForSuccessList).map(([tipsTitle,tipsDescription], index)=>(
                <div className = "innerBoxNumberTitleAndPara">
                  <div>
                    <h1 id="index">0{index+1}</h1>
                  </div>
                  <div>
                    <h1>{tipsTitle}</h1>
                    <p>{tipsDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <BottomBar />
    </div>
  );
}

export default transition(ApplyRoadmap);
