import './Mentors.css'
import textData from '../../../textData'
import MentorProfile from './MentorProfile/MentorProfile'
import searchIcon from './searchIcon.png'
import logos from '../../logos/logos'
import MentorsList from './MentorsList'
import findMentor from '../../Images/findMentor.jpeg'
import findMentor1 from '../../Images/findMentor1.jpeg'
import comingSoon from '../../Images/ComingSoon.png'

function Mentors(){
	return(
		<div className="Mentors"> 
			<div className="findAMentorDescription">
				<img src = {findMentor} />
				<div className="mentorsDescriptionText">
					<h1>{textData.findAMentor}</h1>
					<p>{textData.findAMentorPara}</p>
					<div className="searchBar">
						<input type="text" id="universityName" name="universityName" placeholder="Find Mentors by University"/>
						<img src={searchIcon} />
					</div>
				</div>
				<img src = {findMentor1} />
			</div>
			<div className="schoolLogo">
				{logos.map((logo, index) => (
		            <img key={index} src={logo} className="logos" />
		        ))}
			</div>
			<div className="comingSoonBanner">
				<img src={comingSoon} />
 			</div>


		</div>
	)
}

export default Mentors;