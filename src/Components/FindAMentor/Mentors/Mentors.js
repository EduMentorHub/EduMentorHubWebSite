import './Mentors.css'
import textData from '../../../textData'
import MentorProfile from './MentorProfile/MentorProfile'
import searchIcon from './searchIcon.png'
import logos from '../../logos/logos'
import MentorsList from './MentorsList'

function Mentors(){
	return(
		<div className="Mentors"> 
			<div className="findAMentorDescription">
				<img src = "https://powertofly.com/up/media-library/two-cartoon-people-talking-as-mentor-and-mentee.png?id=33745786&width=1200&height=600&coordinates=0%2C0%2C0%2C28" />
				<div className="mentorsDescriptionText">
					<h1>{textData.findAMentor}</h1>
					<p>{textData.findAMentorPara}</p>
					<div className="searchBar">
						<input type="text" id="universityName" name="universityName" placeholder="Find Mentors by University"/>
						<img src={searchIcon} />
					</div>
				</div>
				<img src = "https://powertofly.com/up/media-library/two-cartoon-people-talking-as-mentor-and-mentee.png?id=33745786&width=1200&height=600&coordinates=0%2C0%2C0%2C28" />
			</div>
			<div className="schoolLogo">
				{logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
		        {logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
		        {logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
		        {logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
		        {logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
			</div>
			<div className="searchMentors">
				{MentorsList.map((mentor, index) => (
					<MentorProfile 
						profileImg={mentor[0]}
						name={mentor[1]}
						bio={mentor[2]}
						mentorshipArea={mentor[3]}
						linkedinLink={mentor[4]} 
					/>
				))}
			</div>


		</div>
	)
}

export default Mentors;