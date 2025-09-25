import Styles from "./Card.module.css";
import "../../index.css";
function Card({ icon, title }) {
  return (
    <div className={Styles.card}>
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  );
}

export default Card;
