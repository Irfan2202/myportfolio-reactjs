import styles from "./About.module.css";
import "../../index.css";

function About() {
  return (
    <section className={styles.about} id="personal">
      <div className="container">
        <h1 className={styles.title}>Ringkasan Profesional</h1>
        <div className={styles.content}>
          <p>
            Halo! Saya Irfan, seorang Web Developer yang berdedikasi dan penuh
            semangat dengan pengalaman lebih dari 1 tahun dalam pengembangan
            aplikasi web yang responsif dan berpusat pada pengguna.
          </p>
          <p>
            Saya memiliki fondasi yang kuat dalam teknologi front-end dan
            back-end, dengan keahlian di HTML5, CSS3, JavaScript, PHP, dan
            framework Laravel. Saat ini saya sedang fokus mendalami React.js
            untuk membangun antarmuka pengguna yang modern dan interaktif.
          </p>
          <p>
            Saya berkomitmen untuk terus belajar dan mengikuti perkembangan
            teknologi web terbaru. Dengan kemampuan pemecahan masalah, perhatian
            pada detail, dan kemampuan bekerja secara kolaboratif, saya siap
            membantu perusahaan atau klien dalam mengembangkan solusi digital
            yang fungsional, inovatif, dan berkualitas tinggi — baik untuk
            kebutuhan kerja full-time, freelance, maupun proyek.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
