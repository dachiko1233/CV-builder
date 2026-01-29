import React from 'react';
import NavBar from './NavBar';
import { useBulder } from '../context/CVProvider';

function CVPreview() {
  const { form, preview } = useBulder();
  return (
    <section>
      <NavBar />
      <div className="pre-container container">
        <div className="pre-bg">
          <div className="pro-oval">
            <img src={preview} />
          </div>
        </div>
        <div className="cv-box">
          <h2 className="cv-title">
            {form.name} {form.lastname}
          </h2>

          <p>{form.profession}</p>

          <span></span>
        </div>
      </div>
    </section>
  );
}

export default CVPreview;
