import React from 'react';
import NavBar from './NavBar';

import PreMain from './PreMain';
import { useBuilder } from '../context/CVProvider';

function CVPreview() {
  const { preview, pic } = useBuilder();
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
