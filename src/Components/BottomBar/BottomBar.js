import './BottomBar.css'
import logo from '.././NavBar/logo.png'
import logoMentoxy from '.././NavBar/logo_mentoxy.png'
import logoMen from '.././NavBar/logo_men.png'
import textData from '../../textData'
import linkedin from './linkedin.png'
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, {useRef,useState} from 'react';

function BottomBar(){

	const [result, showResult] = useState(false);
	const sendEmail = (e) => {
		e.preventDefault();

	    emailjs.sendForm('service_3ws6ihh', 'template_o1bpofp', e.target, 'wg0S9FThfAgie5y6c')
	      .then((result) => {
	          console.log(result.text);
	      }, (error) => {
	          console.log(error.text);
	      });
	    e.target.reset();
	    showResult(true);
	 };

	  setTimeout(()=>{
	    showResult(false);
	  }, 5000);

	return (
		<div className="BottomBar">
			<div className="leftPortionBottomBar">
				<img src={logoMen} />
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
				<h1>Get In Touch With Us</h1>
				<div className="socialsLogo">
					<form action=""  onSubmit={sendEmail}>
				        <div className="form">
				          <input type="text" placeholder="Name" name="fullName" required />
				          <input type="text" placeholder="Email" name="email" required />
				          <textarea type="text" placeholder="Message" name="message" required />
				          <button>Submit</button>
				          <div className="row">
				            {result ? <p>Your message was sent successfully.</p> : null}
				          </div>
				        </div>
				    </form>
				</div>
			</div>
		</div>
	)
}

export default BottomBar;