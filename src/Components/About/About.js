import './About.css'
import textData from '../../textData'
import BottomBar from '../BottomBar/BottomBar';

function About(){
	return (
		<>
			<div className="About">
				<div className="aboutUs">
					<h1> {textData.whatIsEduMentorHub} </h1>
					<p> {textData.whatIsEduMentorHubPara} </p>
				</div>

				<div className="aboutUsNext">
					<div className="aboutUsNextLeft">
						<h1> {textData.theStoryEduMentorHub} </h1>
						<p> {textData.theStoryEduMentorHubPara} </p>
					</div>

					<div className="aboutUsNextRight">
						<h1> {textData.whatWeOffer} </h1>
						<p> {textData.whatWeOfferPara} </p>
					</div>
				</div>
			</div>
			<BottomBar />
		</>
	);
}

export default About;