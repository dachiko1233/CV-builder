import { useBuilder } from '../context/CVProvider';

function Inputs({ id, type, name, pla }) {
  const { form, education, handleChange } = useBuilder();

  return (
    <>
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
              value={education[name] || form[name] || ''}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default Inputs;
