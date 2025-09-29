import styles from "./Hero.module.css";
import Button from "../../components/Button/Button";
import "../../index.css";
function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.row}>
          <div className={styles.column}>
            <img className={styles.img} src="./images/photo.png" alt="irfan" />
          </div>
          <div className={styles.column}>
            <div className={styles.heroContent}>
              <h1 className="title">
                <span>Irfan</span>
              </h1>
              <p className="subtitle">Web Developer</p>
              <p>
                Saya seorang Web Developer yang sudah mempelajari HTML, CSS,
                JavaScript, PHP, dan Laravel. Saat ini saya mendalami React.js
                untuk membangun website modern. Tersedia untuk kerja freelance,
                proyek, atau full-time.
              </p>
              <div className={styles.heroButtons}>
                <Button href="#portfolio" variant="primary">
                  Lihat Portfolio
                </Button>
                <Button href="#kontak" variant="secondary">
                  Hubungi Saya
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
