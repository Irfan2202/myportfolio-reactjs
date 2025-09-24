import styles from "./Navbar.module.css";
import "../../index.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={`container ${styles.navbarInner}`}>
        <a href="#" className={styles.brand}>
          Irfan<span>Dev</span>
        </a>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#tentang">Tentang</a>
            </li>
            <li>
              <a href="#layanan">Layanan</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#artikel">Artikel</a>
            </li>
            <li>
              <a href="#kontak">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
