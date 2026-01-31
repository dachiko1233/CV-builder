import { useBuilder } from '../context/CVProvider';
import Styles from './PreMain.module.css';

export default function PreMain() {
  const { form } = useBuilder();

  console.log(form.number);
  return (
    <div className={Styles.premain}>
      <h2 className={Styles.title}>
        {form.name} {form.lastname}
      </h2>

      <p className={Styles.work}>{form.profession}</p>

      <div className={Styles.loc}>
        <i className={`fa-solid fa-location-dot ${Styles.icon}`}></i>

        <p className={Styles.text}>{form.city}</p>
      </div>

      <p className={Styles.about}>{form.about}</p>

      <div className={Styles.box}>
        <div className={Styles.con}>
          <span className={Styles.span}>
            <i className={`fa-solid fa-envelope ${Styles.ic}`}></i>
            <a href="#">{form.email}</a>
          </span>
          <span className={Styles.span}>
            <i className={`fa-solid fa-phone ${Styles.ic}`}></i>
            <p className={Styles.num}>{form.phone}</p>
          </span>
        </div>

        <div className={Styles.con}>
          <span className={Styles.span}>
            <i className={`fa-brands fa-linkedin ${Styles.ic}`}></i>
            <a href="#">{form.linkdin}</a>
          </span>
          <span className={Styles.span}>
            <i className={`fa-brands fa-github ${Styles.ic}`}></i>
            <a href="#">{form.portfolio}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
