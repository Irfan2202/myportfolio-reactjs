import { useState } from "react";
import styles from "./Navbar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // pastikan diimpor

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          Irfan<span>Dev</span>
        </a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <i
            className={menuOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"}
          ></i>
        </button>

        <ul
          className={`${styles.navLinks} ${
            menuOpen ? styles.navLinksActive : ""
          }`}
        >
          <li>
            <a href="#">Beranda</a>
          </li>
          <li>
            <a href="#personal">Ringkasan Personal</a>
          </li>
          <li>
            <a href="#skill">Keahlian</a>
          </li>
          <li>
            <a href="#pengalaman">Pengalaman</a>
          </li>
          <li>
            <a href="#pendidikan">Pendidikan</a>
          </li>
          <li>
            <a href="#kontak">Kontak</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
