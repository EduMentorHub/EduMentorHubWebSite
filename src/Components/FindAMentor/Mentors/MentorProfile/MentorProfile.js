import './MentorProfile.css'
import textData from '../../../../textData'

function MentorProfile({profileImg, name, bio, mentorshipArea, linkedinLink}){
	return(
		<div className = "MentorProfile">
			<div className="profileAndName">
				<img src={profileImg} />
				<p>{name} </p>
			</div>
			<p>{bio}</p>
			<p><span id="boldText">Areas of Mentorship:</span>{mentorshipArea}</p>
			<p><a href={linkedinLink}>LinkedIn</a></p>
			<button>{textData.scheduleAMeet}</button>
		</div>
	)
}

export default MentorProfile;