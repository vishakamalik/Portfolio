import React from "react";
import styles from "./Work.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <div id="portfolio" className={styles.mywork}>
      <div className={styles.title}>
        <h1>My Latest Work</h1>
        <img
          src={theme_pattern}
          alt="Theme Pattern"
          className={styles.title_pattern}
        />
      </div>

      <div className={styles.mywork_container}>
        {mywork_data.map((work, index) => (
          <a
            key={work.w_no}
            href={work.w_link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.work_card}
          >
            <img src={work.w_img} alt={work.w_name} />
            <div className={styles.overlay}>
              <h3>{work.w_name}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyWork;
