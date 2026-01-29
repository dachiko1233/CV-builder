import Inputs from './Inputs';
import NavBar from './NavBar';
import Profile from './Profile';
import General from './General';
import Inp from './Inp';

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
      <Inputs id="cv-name" type="text" name="name" pla="Type your Firts name" />
      <Inputs id="cv-name" type="text" name="name" pla="Type your Firts name" />
      <Inp />
    </div>
  );
}

export default Editor;
