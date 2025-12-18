import React from "react";
import styles from "./ServiceUI.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Services_Data from "../../assets/services_data";

const Services = () => {
  return (
    <div className={styles.services} id="services">
      <div className={styles.services_title}>
        <h1>My Services</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>
      <div className={styles.services_container}>
        {Services_Data.map((item, index) => {
          return (
            <div className={styles.services_format} key={item.s_no}>
              <h3>{item.s_no}</h3>
              <h2>{item.s_name}</h2>
              <p>{item.s_desc}</p>
              {/* <div className={styles.services_readmore}>
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;