import React from "react";
import styles from "../css/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.footerLinks}>
        <li className={styles.footerLink}>
          <a href="/privacy">Privacy</a>
        </li>
        <li className={styles.footerLink}>
          <a href="/term">Term</a>
        </li>
        <li className={styles.footerLink}>
          <a href="/faq">FAQ</a>
        </li>
        <li className={styles.footerLink}>
          <a href="/data-protection">Data Protection</a>
        </li>
        <li className={styles.footerLink} style={{ borderRight: "none" }}>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <p>© 2025 Bamyan-Restaurant. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
