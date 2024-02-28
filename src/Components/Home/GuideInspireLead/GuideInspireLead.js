import './GuideInspireLead.css';
import textData from '../../../textData'
import logos from '../../logos/logos'

function GuideInspireLead() {
  return (
    <div className="GuideInspireLead">
      <div className="rightPartHome">
        <img src="https://png.pngtree.com/png-vector/20220127/ourmid/pngtree-charater-business-design-png-image_4369737.png" />
      </div>

      <div className="leftPartHome">
        <h1>{textData.guideInspireLead}</h1>
        <p>{textData.guideInspireLeadPara}</p>
        <p id="underLineText">{textData.exploreMentorFAQ}</p>
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
