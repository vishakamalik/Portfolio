import React from "react";
import styles from "./HeroUI.module.css";
import my_img from "../../assets/me.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  const resumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/vishaka_resume.pdf";
    link.download = "Vishaka Malik Resume.pdf";
    link.click();
  };

  return (
    <div id="home" className={styles.hero}>
      <img className={styles.avatar_logo} src={my_img} alt="hero" />
      <h1 className={styles.hero_heading}>
        <span className={styles.name}>I'm Vishaka Malik,</span> Software
        Developer
      </h1>
      <p className={styles.subheading}>
        Detail-oriented Computer Science graduate with experience in MERN-based
        full-stack development and data analysis. Skilled in building scalable
        applications, efficient APIs, and data-driven decision-making.
      </p>
      <div className={styles.hero_action}>
        <div className={styles.hero_connect}>
          <AnchorLink
            className={styles.anchor_link}
            href="#contact"
            offset={90}
          >
            Connect with me
          </AnchorLink>
        </div>
        <div className={styles.hero_resume} onClick={resumeDownload}>
          My resume
        </div>
      </div>
    </div>
  );
};

export default Hero;
