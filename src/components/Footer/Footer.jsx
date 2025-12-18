import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer} id="footer">
      <div className={styles.footer_bottom}>
        <p className={styles.footer_bottom_left}>
          © 2025 Vishaka Malik. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;