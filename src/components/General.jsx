import React from 'react';

function General({ title, number, text }) {
  return (
    <section className="section-inp container">
      <div className="inp-dec">
        <div className="inp-info">
          <span className="inp-number">{number}</span>

          <h3 className="inp-title">{title}</h3>
        </div>

        <div className="inp-about">
          <p className="inp-text">{text}</p>
        </div>
      </div>
    </section>
  );
}

export default General;
