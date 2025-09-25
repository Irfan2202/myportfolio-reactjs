import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <a href="#" className={styles.brand}>
          Irfan<span>Dev</span>
        </a>
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#">Beranda</a>
            </li>
            <li>
              <a href="#personal">Ringkasan Personal</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#articles">Artikel</a>
            </li>
            <li>
              <a href="#contact">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
