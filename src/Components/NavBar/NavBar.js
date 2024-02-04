import './NavBar.css';
import React, {useState} from 'react';
import logo from './logo.png'

function NavBar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen)
  };

  return (
    <div className="nav">
      <div className="NavBar">
        <img id="logo" src={logo} alt="logo" />
        <button className="navToggle" onClick={toggleNav}> ☰ </button>
        <h2 className="showTextNavBar"> Apply Roadmap </h2>
        <div className="insideNav showTextNavBar">
          <h2> Find a Mentor </h2>
          <h2> Schedule a Meet </h2>
        </div>
        <h2 className="showTextNavBar"> Resources </h2>
        <h2 className="showTextNavBar"> About </h2>
        <h2 id="roundedText" className="showTextNavBar"> FAQ </h2>
      </div>
      <div className={isNavOpen ? 'showToggleBar':'hideToggleBar'}>
          <h2 > Apply Roadmap </h2>
          <h2> Find a Mentor </h2>
          <h2> Schedule a Meet </h2>
          <h2> Resources </h2>
          <h2> About </h2>
          <h2> FAQ </h2>
        </div>
    </div>
  );
}

export default NavBar;
