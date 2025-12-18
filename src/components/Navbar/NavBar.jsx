import React, { useState, useRef } from "react";
import styles from "./NavBar.module.css";
import me_img from "../../assets/me.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "block";
      menuRef.current.style.right = "0";
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "none";
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={me_img} alt="Profile" />
        <span className={styles.logo_text}>Portfolio</span>
      </div>

      {/* Mobile Toggle Button */}
      <div className={styles.nav_mob_open} onClick={openMenu}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <ul ref={menuRef} className={styles.nav_menu}>
        {/* Close button */}
        <div className={styles.nav_mob_close} onClick={closeMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <li className={styles.nav_item}>
          <AnchorLink offset={90} href="#home">
            Home
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink offset={85} href="#about">
            About Me
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#services"
          >
            Services
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#portfolio"
          >
            Projects
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#contact"
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      {/* Navigation Menu */}
      <ul ref={menuRef} className={styles.nav_menu_mobile}>
        {/* Close button */}
        <div className={styles.nav_mob_close} onClick={closeMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={90}
            href="#home"
            onClick={closeMenu}
          >
            Home
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#about"
            onClick={closeMenu}
          >
            About Me
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#services"
            onClick={closeMenu}
          >
            Services
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#portfolio"
            onClick={closeMenu}
          >
            Portfolio
          </AnchorLink>
        </li>
        <li className={styles.nav_item}>
          <AnchorLink
            className={styles.anchor_link}
            offset={85}
            href="#contact"
            onClick={closeMenu}
          >
            Contact
          </AnchorLink>
        </li>
      </ul>

      <div className={styles.nav_connect}>
        <AnchorLink className={styles.anchor_link} offset={80} href="#contact">
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;