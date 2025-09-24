import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="title">
            Halo, Saya <span>Irfan</span>
          </h1>
          <p className={styles.subtitle}>Web Developer</p>
          <p>
            Seorang web developer dengan 1 tahun pengalaman dalam HTML, CSS,
            JavaScript, PHP, Laravel, dan sedang mempelajari React.js. Siap
            membantu mewujudkan visi digital Anda.
          </p>
          <div className={styles.heroButtons}>
            <a href="#portfolio" className="btn btn-primary">
              Lihat Portfolio
            </a>
            <a href="#kontak" className="btn btn-secondary">
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
