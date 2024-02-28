import './App.css';
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import ApplyRoadmap from './Components/ApplyRoadmap/ApplyRoadmap'
import FindAMentor from './Components/FindAMentor/FindAMentor';
import Resource from './Components/Resources/Resource'
import Faq from './Components/FAQ/Faq'
import About from './Components/About/About'
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location = {location} key={location.pathname} >
          <Route path='/' element={<Home />} />
          <Route path='/resource' element={<Resource />} />
          <Route path='/apply-roadmap' element={<ApplyRoadmap />} />
          <Route path='/find-a-mentor' element={<FindAMentor />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<Faq />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
