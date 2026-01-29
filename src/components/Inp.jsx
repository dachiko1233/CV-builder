import { useBulder } from '../context/CVProvider';

function Inputs({ id, type, name, pla }) {
  const { form, handleChange } = useBulder();
  return (
    <section className=" container">
      <form className="inp-form">
        <div className="inp-1">
          <div className="inp-name">
            <label htmlFor={id}></label>
            <input
              id={id}
              type={type}
              name={name}
              className="input"
              placeholder={pla}
              value={form[name] || ''}
              onChange={handleChange}
            />
          </div>

          {/* <div className="inp-name">
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
          </div> */}
        </div>

        {/* <div className="inp-name">
          <label htmlFor="cv-profession"></label>
          <input
            id="cv-profession"
            type="text"
            name="profession"
            className="input"
            placeholder="Type your profession"
            value={form.profession}
            onChange={handleChange}
          />
        </div> */}
      </form>
    </section>
  );
}

export default Inputs;
