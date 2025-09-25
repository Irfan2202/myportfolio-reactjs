import styles from "./Button.module.css";

function Button({ children, href, variant = "primary" }) {
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  return (
    <a href={href} className={buttonClass}>
      {children}
    </a>
  );
}

export default Button;
