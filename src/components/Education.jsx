import React from 'react';
import { useBuilder } from '../context/CVProvider';
import Styles from './Education.module.css';

function Education({ title }) {
  const { education } = useBuilder();
  return (
    <div className={Styles.edu}>
      <h2>{title}</h2>

      <p className={Styles.school}>{education.eduschool}</p>

      <p>{education.edudegree}</p>

      <span>
        {education.edustrdate} - {education.eduenddate}
      </span>
    </div>
  );
}

export default Education;
