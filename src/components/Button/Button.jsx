import styles from "./Button.module.css";

function Button({ children, href, type, variant = "primary", ...rest }) {
  const buttonClass = `${styles.btn} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={buttonClass} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type || "button"} className={buttonClass} {...rest}>
      {children}
    </button>
  );
}

export default Button;
