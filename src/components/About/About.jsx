import styles from "./About.module.css";

function About() {
  return (
    <section class={styles.about} id="about">
      <div class={styles.container}>
        <h1 class={styles.title}>Tentang Saya</h1>
        <div class={styles.row}>
          <div class={styles.column}>img</div>
          <div class={styles.column}>
            <div class={styles.content}>
              <h2>Web Developer</h2>
              <p>
                Halo! Saya Irfan, seorang web developer yang telah menekuni
                dunia pemrograman web selama 1 tahun. Perjalanan saya dimulai
                dengan mempelajari fondasi web development seperti HTML, CSS,
                dan JavaScript.
              </p>
              <p>
                Seiring waktu, saya mengeksplorasi teknologi backend dengan PHP
                dan framework Laravel untuk membangun aplikasi web yang dinamis
                dan scalable. Saat ini, saya sedang memperdalam React.js untuk
                menciptakan user interface yang interaktif dan modern.
              </p>
              <p>
                Saya passionate dalam menciptakan solusi digital yang tidak
                hanya fungsional, tapi juga memberikan pengalaman pengguna yang
                luar biasa. Setiap project adalah kesempatan untuk belajar dan
                berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
