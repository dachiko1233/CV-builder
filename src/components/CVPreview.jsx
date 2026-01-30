import React from 'react';
import NavBar from './NavBar';
import { useBulder } from '../context/CVProvider';
import PreMain from './PreMain';

function CVPreview() {
  const { preview } = useBulder();
  return (
    <section>
      <NavBar />
      <div className="pre-container container">
        <div className="pre-bg">
          <div className="pro-oval">
            <img src={preview} />
          </div>
        </div>
        <PreMain />
      </div>
    </section>
  );
}

export default CVPreview;
