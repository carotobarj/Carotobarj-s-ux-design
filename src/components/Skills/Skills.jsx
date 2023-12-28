import "./Skills.css";
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import js from '../../assets/images/js.jpg'
import react from '../../assets/images/react.png'
import redux from '../../assets/images/redux.jpg'
import uxui from '../../assets/images/uxui.png'
import scrum from '../../assets/images/scrum.jpg'

const Skills = () => {
  return (
    <div>
      <span className="skill-text">My Skills</span>
      <div className="skills-container">
        <div className="skill">
          <div >
            <img className="content react" src={react} alt='' width="150px" height="150px" />
          </div>
          <h1>REACT</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content uxui" src={uxui} alt='' width="150px" height="150px" />
          </div>
          <h1>UX/UI</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content html" src={html} alt='' width="150px" height="150px" />
          </div>
          <h1>HTML</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content css" src={css} alt='' width="150px" height="150px" />
          </div>
          <h1>CSS</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content javascript" src={js} alt='' width="150px" height="150px" />
          </div>
          <h1>JAVASCRIPT</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content redux" src={redux} alt='' width="150px" height="150px" />
          </div>
          <h1>REDUX</h1>
        </div>
        <div className="skill">
          <div>
            <img className="content scrum" src={scrum} alt='' width="150px" height="150px" />
          </div>
          <h1>SCRUM</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
