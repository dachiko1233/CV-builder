import Styles from './PreMain.module.css';
import { useBulder } from '../context/CVProvider';

export default function PreMain() {
  const { form } = useBulder();

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
          <span>
            <i className="fa-solid fa-envelope"></i>
            <a href="#">{form.email}</a>
          </span>
          <span>
            <i className="fa-solid fa-phone"></i>
            <p>{form.number}</p>
          </span>
        </div>

        <div>
          <span>
            <i className="fa-brands fa-linkedin"></i>
            <a href="#">{form.linkdin}</a>
          </span>
          <span>
            <i className="fa-brands fa-github"></i>
            <a href="#">{form.portfolio}</a>
          </span>
        </div>
      </div>
    </div>
  );
}
