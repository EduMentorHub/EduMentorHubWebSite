import './BottomBar.css'
import logo from '.././NavBar/logo.png'
import textData from '../../textData'
import linkedin from './linkedin.png'
import { Link } from 'react-router-dom';

function BottomBar(){
	return (
		<div className="BottomBar">
			<div className="leftPortionBottomBar">
				<img src={logo} />
				<p>"Find Your Mentor,</p>
				<p>Schedule Your Sessions,</p>
				<p>Elevate Your Future."</p>
			</div>

			<div className="middlePortionBottomBar">
				<h1>{textData.quickLinks}</h1>
				<Link className = "bottomBarLink" style={{ textDecoration: 'none' }} to='/apply-roadmap'>
					<p>{textData.applyRoadMap}</p>
				</Link>
				<Link className = "bottomBarLink" style={{ textDecoration: 'none' }} to='/find-a-mentor'>
					<p>{textData.findAMentor}</p>
				</Link>
				<Link className = "bottomBarLink" style={{ textDecoration: 'none' }} to='/resource'>
					<p>{textData.resources}</p>
				</Link>
				<Link className = "bottomBarLink" style={{ textDecoration: 'none' }} to='/about'>
					<p>{textData.aboutUs}</p>
				</Link>
				<Link className = "bottomBarLink" style={{ textDecoration: 'none' }} to='/faq'>
					<p>{textData.faq}</p>
				</Link>
			</div>

			<div className="rightPortionBottomBar">
				<h1>{textData.followUs}</h1>
				<div className="socialsLogo">
					<img src={linkedin} />
				</div>
			</div>
		</div>
	)
}

export default BottomBar;