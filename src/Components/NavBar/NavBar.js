import './NavBar.css';
import React, {useState} from 'react';
import logo from './logo.png'
import logoMentoxy from './logo_mentoxy.png'
import logoMen from './logo_men.png'
import { Link } from 'react-router-dom';

function NavBar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen)
  };

  return (
    <div className="nav">
      <div className="NavBar">
        <Link style={{ textDecoration: 'none' }} to='/'><img id="logo" src={logoMen} alt="logo" /></Link>
        <button className="navToggle" onClick={toggleNav}> ☰ </button>
        <Link className = "navBarLink" style={{ textDecoration: 'none' }} to='/apply-roadmap'><h2 className="showTextNavBar"> Apply Roadmap </h2></Link>
        <Link className = "navBarLink" style={{ textDecoration: 'none' }} to='/find-a-mentor'><h2 className="showTextNavBar"> Find a Mentor </h2></Link>
        <Link className = "navBarLink" style={{ textDecoration: 'none' }} to='/resource'><h2 className="showTextNavBar"> Resources </h2></Link>
        <Link className = "navBarLink" style={{ textDecoration: 'none' }} to='/about'><h2 className="showTextNavBar"> About </h2></Link>
        <Link className = "navBarLink" style={{ textDecoration: 'none' }} to='/faq'><h2 id="roundedText" className="showTextNavBar"> FAQ </h2></Link>
      </div>
      <div className={isNavOpen ? 'showToggleBar':'hideToggleBar'}>
        <Link style={{ textDecoration: 'none' }} to='/apply-roadmap'><h2 > Apply Roadmap </h2> </Link>
        <Link style={{ textDecoration: 'none' }} to='/find-a-mentor'><h2> Find a Mentor </h2></Link>
        <Link style={{ textDecoration: 'none' }} to='/resource'><h2> Resources </h2></Link>
        <Link style={{ textDecoration: 'none' }} to='/about'><h2> About </h2></Link>
        <Link style={{ textDecoration: 'none' }} to='/faq'><h2> FAQ </h2></Link>
        </div>
    </div>
  );
}

export default NavBar;
