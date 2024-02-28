import './Resource.css';
import textData from '../../textData';
import transition from '../../transition';
import BottomBar from '../BottomBar/BottomBar';
import NavBar from '../NavBar/NavBar';

function Resource() {
    return (
        <div>
            <div className='resource'>
                <div className="generalResource">
                    <h1>{textData.generalResourceApplyingCollege}</h1>
                    <p>{textData.generalResourceApplyingCollegePara}</p>
                    <ul>
                        {
                            textData.generalResourceApplyingCollegeList.map((item, index) => (
                                <li key={index}>
                                    <a href = {item[1]}>{item[0]}</a>
                                    <span> : {item[2]}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="setCommon">
                    <h1>{textData.setupCommonApp}</h1>
                    <p>{textData.setupCommonAppPara}</p>
                    <ul>
                        {
                            textData.setupCommonAppList.map((item, index) => (
                                <li key={index}>
                                    <a href = {item[1]}>{item[0]}</a>
                                    <span> : {item[2]}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="prepareForMentorship">
                    <h1>{textData.howToPrepareMentorshipMeeting}</h1>
                    <p>{textData.howToPrepareMentorshipMeetingPara}</p>
                    <ol>
                        {
                            textData.tipsToPrepareMentorshipMeeting.map((item, index) => (
                                <li key={index}>
                                    <p>{item[0]} : <span>{item[1]}</span></p>
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
            <BottomBar />
        </div>
        

    );
}

export default transition(Resource);