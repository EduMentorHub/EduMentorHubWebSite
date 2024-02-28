import './FindAMentor.css'
import NavBar from '../NavBar/NavBar'
import BottomBar from '../BottomBar/BottomBar'
import Mentors from './Mentors/Mentors'
import MentorshipTip from './MentorshipTip/MentorshipTip'
import transition from '../../transition';

function FindAMentor(){
	return(
		<div className="FindAMentor">
			<Mentors />
			<MentorshipTip />
			<BottomBar />
		</div>
	)
}

export default transition(FindAMentor);