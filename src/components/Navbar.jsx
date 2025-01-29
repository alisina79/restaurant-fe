import React from "react";
import styles from "../css/Navbar.module.css";
import { useState } from "react";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div>
      <nav className={styles.navbar}>
        <h1 className={styles.logo}>
          <a href="/">Bamyan-Restaurant</a>
        </h1>
        <ul className={styles.navLinks}>
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
            <a href="/news-events">News&Events</a>
          </li>
          <button
            className={styles.click}
            on={() => setDropdownOpen(!dropdownOpen)}
          >
            Order now
          </button>

          {dropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li>
                <a href="/order/delivery">Delivery</a>
              </li>
              <li>
                <a href="/order/pickup">Pickup</a>
              </li>
              <li>
                <a href="/order/table">Table Reservation</a>
              </li>
            </ul>
          )}
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
