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
        <h1>
          {form.name} {form.lastname}
        </h1>
      </div>
    </section>
  );
}

export default CVPreview;
