import React from 'react';
import NavBar from './NavBar';
import { useBulder } from '../context/CVProvider';
import PreMain from './PreMain';

function CVPreview() {
  const { preview, pic } = useBulder();
  return (
    <section>
      <NavBar />
      <div className="pre-container container">
        <div className="pre-bg">
          <div className="pro-oval">
            {preview ? <img src={preview} /> : <img src={pic} alt="User" />}
          </div>
        </div>
        <PreMain />
      </div>
    </section>
  );
}

export default CVPreview;
