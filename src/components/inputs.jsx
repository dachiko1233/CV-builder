import { useBulder } from '../context/CVProvider';

function Inputs() {
  const { form, handleChange } = useBulder();
  return (
    <section className="section-inp container">
      <div className="inp-dec">
        <div className="inp-info">
          <span className="inp-number">1</span>

          <h3 className="inp-title">General information</h3>
        </div>

        <div className="inp-about">
          <p className="inp-text">
            This is a critical part of your CV as it gives the potential
            employer a glimpse of who you are. This is an opportunity for you to
            introduce yourself, highlight your skills, and provide a brief
            summary of your career goals.
          </p>
        </div>
      </div>

      <form className="inp-form">
        <div className="inp-1">
          <div className="inp-name">
            <label htmlFor="cv-name"></label>
            <input
              id="cv-name"
              type="text"
              name="name"
              className="input"
              placeholder="Type your Firts name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="inp-name">
            <label htmlFor="cv-last"></label>
            <input
              id="cv-last"
              type="text"
              name="lastname"
              className="input"
              placeholder="Type your Last name"
              value={form.lastname}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Inputs;
