import React from "react";
import styles from "./About.module.css";
import me_img from "../../assets/me.png";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.about_title}>
        <h1 className={styles.heading}>About me</h1>
      </div>
      <div className={styles.about_section}>
        <div className={styles.about_left}>
          <img src={me_img} alt="Profile" />
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_para}>
            <p>
              Full Stack Developer proficient in building scalable web
              applications using the MERN stack. Skilled in designing efficient
              APIs, implementing real-time features, and creating user-centric
              interfaces. Passionate about developing clean, maintainable, and
              impactful solutions.
            </p>
          </div>
          <div className={styles.about_skills}>
            <div className={styles.about_skill}>
              <p>HTML & CSS</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>React Js</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>JavaScript</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>Node Js</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>Express</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_achievements}>
        <div className={styles.about_achievement}>
          <h1>Top 5%</h1>
          <p>OF THE Programme</p>
        </div>
        <div className={styles.achievement_divider}></div>
        <div className={styles.about_achievement}>
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className={styles.achievement_divider}></div>
        <div className={styles.about_achievement}>
          <h1>2</h1>
          <p>RESEARCH PAPER PUBLISHED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
