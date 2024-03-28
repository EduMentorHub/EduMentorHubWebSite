import './GuideInspireLead.css';
import textData from '../../../textData'
import logos from '../../logos/logos'
import guideInspireMentor from '../../Images/guideInspireMentor.png'
import { Link } from 'react-router-dom';

function GuideInspireLead() {
  return (
    <div className="GuideInspireLead">
      <div className="rightPartHome">
        <img src={guideInspireMentor} />
      </div>

      <div className="leftPartHome">
        <h1>{textData.guideInspireLead}</h1>
        <p>{textData.guideInspireLeadPara}</p>
        <Link to="/faq" style={{color:'black', textDecoration: 'none' }} className = "navBarLink">
         <p id="underLineText">{textData.exploreMentorFAQ}</p>
        </Link>
        <div className="meetAndGreetButton">
          <a href="https://forms.gle/eGE8hRUJrBJ9yqbZA">
            <button>{textData.signUpMentor}</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default GuideInspireLead;
