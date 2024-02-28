import './Home.css';
import textData from '../../textData'
import transition from '../../transition'
import NavBar from '.././NavBar/NavBar'
import Welcome from './Welcome/Welcome'
import MeetAndGreet from './MeetAndGreet/MeetAndGreet'
import ReadyToConnect from './ReadyToConnect/ReadyToConnect'
import GuideInspireLead from './GuideInspireLead/GuideInspireLead'
import BottomBar from '.././BottomBar/BottomBar'
import React, { useEffect, useRef } from 'react';
import { Link, Element, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

function Home() {
  return (
    <div className="Home">
      <Element name="welcome">
        <Welcome />
      </Element>
      <Element name="meetAndGreet">
        <MeetAndGreet />
      </Element>
      <Element name="readyToConnect">
        <ReadyToConnect />
      </Element>
      <Element name="guideInspireLead">
        <GuideInspireLead />
      </Element>
      <Element name="bottomBar">
        <BottomBar />
      </Element>
    </div>
  );
}

export default transition(Home);
