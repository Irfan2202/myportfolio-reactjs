import styles from "./CardPortfolio.module.css";

function CardPortfolio({ image, title, description, techs, demoLink }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <i className="fa-regular fa-image"></i>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        <div className={styles.cardTags}>
          {techs.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        <div className={styles.cardButtons}>
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnLive}`}
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardPortfolio;
