import Inputs from './Inputs';
import NavBar from './NavBar';
import Profile from './Profile';
import General from './General';
import Button from './Button';
import { useBuilder } from '../context/CVProvider';
import DeleteBtn from './DeleteBtn';

function Editor() {
  const { open, handleShowInputs, handleAddEducation, handleDelete } =
    useBuilder();
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

        <Inputs id="cv-city" type="text" name="city" pla="Type your City" />

        <Inputs
          id="cv-linkdin"
          type="text"
          name="linkdin"
          pla="Type your Linkdin name"
        />
        <Inputs
          id="cv-portolio"
          type="text"
          name="portfolio"
          pla="Type your Portfolio URL"
        />

        <Inputs
          id="cv-email"
          type="email"
          name="email"
          pla="Type your @gmai.com "
        />
        <Inputs id="cv-phone" type="tel" name="phone" pla="Type your Number " />

        <Inputs
          id="cv-about"
          type="text"
          name="about"
          pla="Type your Description (About me) "
        />
      </div>
      <General
        number={2}
        title="Education"
        text="The education demonstrates your commitment to learning and your willingness to acquire new skills If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any "
      />
      <div className="btn-style container">
        <Button
          onClick={handleShowInputs}
          close={open ? '➖ Close education' : '➕ Add education'}
        />
      </div>

      <div className="edc-grid container">
        <Inputs
          id="ed-School"
          text="text"
          name="school"
          pla="Type your shchool name"
        />

        <Inputs
          id="ed-degre"
          text="text"
          name="degree"
          pla="Degree, certification or title"
        />

        <Inputs id="ed-star" text="text" name="strdate" pla="Starting date" />

        <Inputs id="ed-enddate" text="text" name="enddate" pla="Ending date" />
      </div>

      <div className="btn-style container">
        <DeleteBtn clear="Clear all" onClick={handleDelete} />
      </div>

      {open && (
        <>
          <div className="edc-grid container">
            <Inputs
              id="eduschool"
              text="text"
              name="eduscholl"
              pla="Type your shchool name"
            />

            <Inputs
              id="edudegree"
              text="text"
              name="edudegree"
              pla="Degree, certification or title"
            />

            <Inputs
              id="edustart"
              text="text"
              name="eduStart"
              pla="Starting date"
            />

            <Inputs id="eduend" text="text" name="eduend" pla="Ending date" />
          </div>

          <div className="btn-style container">
            <Button onClick={handleAddEducation} button="save education" />
            <DeleteBtn clear="Clear all" onClick={handleDelete} />
          </div>
        </>
      )}
    </div>
  );
}

export default Editor;
