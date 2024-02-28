import './MentorshipTip.css'
import textData from '../../../textData'

function MentorshipTip(){
	const colors = ["#8FBAB1","#FF8F6F","#FF708E","#FCC69B"]
	return(
		<div className="MentorshipTip">
			<h1>{textData.mentorshipStrategies}</h1>

			<div className="mentorshipStrategies">
				{Object.entries(textData.mentorshipStrategiesList).map(([title, description], index) => (
					<div className="strategies" style={{backgroundColor:colors[index]}}>
						<h1>{title}</h1>
						<p>{description}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default MentorshipTip;