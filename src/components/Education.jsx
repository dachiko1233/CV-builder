import React from 'react';
import { useBuilder } from '../context/CVProvider';
import Styles from './Education.module.css';

function Education({ title }) {
  const { form, education, open } = useBuilder();
  return (
    <>
      <div className={Styles.edu}>
        <h2>{title}</h2>

        <p className={Styles.school}>{form.school}</p>

        <p>{form.degree}</p>

        <span>
          {form.strdate} - {form.enddate}
        </span>
      </div>

      {open && (
        <div className={Styles.edu}>
          <h2>{title}</h2>

          <p className={Styles.school}>{education.eduschool}</p>

          <p>{education.edudegree}</p>

          <span>
            {education.edustrdate} - {education.eduenddate}
          </span>
        </div>
      )}
    </>
  );
}

export default Education;
