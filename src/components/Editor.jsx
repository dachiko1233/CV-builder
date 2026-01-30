import Inputs from './Inputs';
import NavBar from './NavBar';
import Profile from './Profile';
import General from './General';

function Editor() {
  return (
    <div>
      <NavBar />
      <Profile />
      <General
        title="General information"
        number={1}
        text="  This is a critical part of your CV as it gives the potential
            employer a glimpse of who you are. This is an opportunity for you to
            introduce yourself, highlight your skills, and provide a brief
            summary of your career goals."
      />

      <div className="inp-grid container">
        <Inputs
          id="cv-name"
          type="text"
          name="name"
          pla="Type your Firts name"
        />
        <Inputs
          id="cv-lastnam"
          type="text"
          name="lastname"
          pla="Type your Last name"
        />

        <Inputs
          id="cv-name"
          type="text"
          name="profession"
          pla="Type your Firts name"
        />
        <Inputs id="cv-name" type="text" name="city" pla="Type your City" />

        <Inputs
          id="cv-name"
          type="text"
          name="linkdin"
          pla="Type your Linkdin name"
        />
        <Inputs
          id="cv-name"
          type="text"
          name="portfolio"
          pla="Type your Portfolio URL"
        />

        <Inputs
          id="cv-name"
          type="text"
          name="email"
          pla="Type your @gmai.com "
        />
        <Inputs id="cv-name" type="text" name="phone" pla="Type your Number " />

        <Inputs
          id="cv-name"
          type="text"
          name="about"
          pla="Type your Description (About me) "
        />
      </div>
      <General
        number={2}
        title="Education"
        text="The education demonstrates your commitment to learning and your willingness to acquire new skills"
      />
    </div>
  );
}

export default Editor;
