import Styles from "./CardIcons.module.css";
import "../../index.css";
function CardIcons({ icon, title }) {
  return (
    <div className={Styles.card}>
      <i className={icon}></i>
      <span>{title}</span>
    </div>
  );
}

export default CardIcons;
