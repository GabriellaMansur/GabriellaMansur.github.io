import  { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <div className={styles.waviy}>
            <span style={{ '--i': 2 }}>&lt;</span>
            <span style={{ '--i': 14 }}>G</span>
            <span style={{ '--i': 6 }}>a</span>
            <span style={{ '--i': 18 }}>b</span>
            <span style={{ '--i': 10 }}>r</span>
            <span style={{ '--i': 12 }}>i</span>
            <span style={{ '--i': 4 }}>e</span>
            <span style={{ '--i': 16 }}>l</span>
            <span style={{ '--i': 8 }}>l</span>
            <span style={{ '--i': 9 }}>a</span>
            <span style={{ '--i': 2 }}>/&gt;</span>
        </div>
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="/about">Sobre</a>
          </li>
          <li>
            <a href="#experience">Skills</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#about">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};