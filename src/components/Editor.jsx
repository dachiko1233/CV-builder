import Inputs from './Inputs';
import NavBar from './NavBar';
import Profile from './Profile';
import General from './General';
import Button from './Button';
import { useBuilder } from '../context/CVProvider';
import DeleteBtn from './DeleteBtn';

function Editor() {
  const {
    open,
    handleShowInputs,

    handleDelete,
    handleChange,
    deleteEducation,
    form,
    education,
  } = useBuilder();

  return (
    <div>
      <NavBar />
      <Profile />
      {/* General Information section */}
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
          value={form[name]}
          onChange={handleChange}
        />
        <Inputs
          id="cv-lastnam"
          type="text"
          name="lastname"
          pla="Type your Last name"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="cv-name"
          type="text"
          name="profession"
          pla="Type your Firts name"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="cv-city"
          type="text"
          name="city"
          pla="Type your City"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="cv-linkdin"
          type="text"
          name="linkdin"
          pla="Type your Linkdin name"
          value={form[name]}
          onChange={handleChange}
        />
        <Inputs
          id="cv-portolio"
          type="text"
          name="portfolio"
          pla="Type your Portfolio URL"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="cv-email"
          type="email"
          name="email"
          pla="Type your @gmai.com"
          value={form[name]}
          onChange={handleChange}
        />
        <Inputs
          id="cv-phone"
          type="tel"
          name="phone"
          pla="Type your Number "
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="cv-about"
          type="text"
          name="about"
          pla="Type your Description (About me)"
          value={form[name]}
          onChange={handleChange}
        />
      </div>

      {/* Education sectio */}
      <General
        number={2}
        title="Education"
        text="The education demonstrates your commitment to learning and your willingness to acquire new skills If you have multiple degrees, list them in reverse chronological order, with the most recent degree listed first and if you don't have any "
      />
      <div className="btn-style container">
        <Button
          onClick={() => handleShowInputs('eudcation')}
          close={open.eudcation ? '➖ Close education' : '➕ Add education'}
        />
      </div>

      <div className="edc-grid container">
        <Inputs
          id="ed-School"
          type="text"
          name="school"
          pla="Type your shchool name"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="ed-degre"
          type="text"
          name="degree"
          pla="Degree, certification or title"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="ed-star"
          type="text"
          name="strdate"
          pla="Starting date"
          value={form[name]}
          onChange={handleChange}
        />

        <Inputs
          id="ed-enddate"
          type="text"
          name="enddate"
          pla="Ending date"
          value={form[name]}
          onChange={handleChange}
        />
      </div>

      <div className="btn-style container">
        <DeleteBtn clear="Clear all" onClick={handleDelete} />
      </div>

      {open.eudcation && (
        <>
          <div className="edc-grid container">
            <Inputs
              id="eduschool"
              type="text"
              name="eduschool"
              pla="Type your shchool name"
              value={education[name]}
              onChange={handleChange}
            />

            <Inputs
              id="edudegre"
              type="text"
              name="edudegre"
              pla="Degree, certification or title"
              value={education[name]}
              onChange={handleChange}
            />

            <Inputs
              id="edustart"
              type="text"
              name="edustart"
              pla="Starting date"
              value={education[name]}
              onChange={handleChange}
            />

            <Inputs
              id="eduend"
              type="text"
              name="eduend"
              pla="Ending date"
              value={education[name]}
              onChange={handleChange}
            />
          </div>

          <div className="btn-style container">
            {/* <Button onClick={handleAddEducation} button="save education" /> */}
            <DeleteBtn clear="Clear all" onClick={deleteEducation} />
          </div>
        </>
      )}
      {/* workExperience Section */}
      <General
        number={3}
        title="Work Experience"
        text="In addition to the basics, you should also include a brief description of your duties and accomplishments while in the role. This can help potential employers understand the scope of your responsibilities and the impact of it."
      />

      <div className="btn-style container">
        <Button
          onClick={() => handleShowInputs('workeexp')}
          close={
            open.workeexp
              ? '➖ Close Work Experience'
              : '➕ Add Work Experience'
          }
        />
      </div>

      <div className="edc-grid container">
        <Inputs
          id="exp-psoition"
          type="text"
          name="position"
          pla="Type your Position"
        />

        <Inputs
          id="exp-company"
          type="text"
          name="company"
          pla="Type your Company"
        />

        <Inputs
          id="exp-loc"
          type="text"
          name="location"
          pla="Type your location"
        />

        <Inputs
          id="exp-fromdate"
          type="text"
          name="fromdate"
          pla="Type your from"
        />

        <Inputs
          id="exp-end"
          type="text"
          name="todate"
          pla="Type your to date"
        />

        <Inputs id="exp-tasks" type="text" name="tasks" pla="Type your tasks" />
      </div>

      {open.workeexp && (
        <>
          <div className="edc-grid container">
            <Inputs
              id="exp-psoition"
              type="text"
              name="position"
              pla="Type your Position"
            />

            <Inputs
              id="exp-company"
              type="text"
              name="company"
              pla="Type your Company"
            />

            <Inputs
              id="exp-loc"
              type="text"
              name="location"
              pla="Type your location"
            />

            <Inputs
              id="exp-fromdate"
              type="text"
              name="fromdate"
              pla="Type your from"
            />

            <Inputs
              id="exp-end"
              type="text"
              name="todate"
              pla="Type your to date"
            />

            <Inputs
              id="exp-tasks"
              type="text"
              name="tasks"
              pla="Type your tasks"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Editor;
