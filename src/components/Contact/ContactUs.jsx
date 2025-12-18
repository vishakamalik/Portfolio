import React, { useState } from "react";
import styles from "./ContactUs.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import Loader from "../Loder/Loader";

const ContactUs = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    formData.append("access_key", process.env.REACT_APP_API_KEY);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      if (json?.success) {
        alert("Email Send Successfully");
      } else {
        alert("Something went wrong");
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert(err.message);
      console.error(err);
    }
  };
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.contact_title}>
        <h1>Get in Touch</h1>
        <img
          src={theme_pattern}
          alt="pattern"
          className={styles.title_pattern}
        />
      </div>
      <div className={styles.contact_section}>
        <div className={styles.contact_left}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects and employment
            opportunities. Whether you have a question about my tech stack or
            want to discuss a potential collaboration.
          </p>
          <div className={styles.contact_details}>
            <div className={styles.contact_detail}>
              <img src={mail_icon} alt="Mail" />
              <p>vishakamalik13@gmail.com</p>
            </div>
            <div className={styles.contact_detail}>
              <img src={call_icon} alt="Call" />
              <p>+91 8586978669</p>
            </div>
            <div className={styles.contact_detail}>
              <img src={location_icon} alt="Location" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.contact_right}>
          <div className={styles.form_group}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={styles.contact_submit}
            disabled={loading}
          >
            {loading ? <Loader /> : "Submit Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
