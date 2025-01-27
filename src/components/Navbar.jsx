import React from "react";
import styles from "../css/Navbar.module.css";
function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>Bamyan-Restaurant</h1>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navLink}>
            <a href="/about">About</a>
          </li>
          <li className={styles.navLink}>
            <a href="/location">Location</a>
          </li>
          <li className={styles.navLink}>
            <a href="/media">Media</a>
          </li>
          <li className={styles.navLink}>
            <a href="/new&event">News&Event</a>
          </li>
          <button className={styles.click}>Order now</button>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
