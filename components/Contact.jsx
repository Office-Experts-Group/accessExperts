"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import ContactForm from "./ContactForm";
const QuoteForm = dynamic(() => import("./QuoteForm"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

import styles from "../styles/contact.module.css";

const Contact = ({ isQuote }) => {
  const [activeForm, setActiveForm] = useState("contact");

  const handleFormSwitch = (formType) => {
    setActiveForm(formType);
  };

  useEffect(() => {
    if (isQuote) {
      setActiveForm("quote");
    }
  }, []);

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.sidebar}>
        <div className={styles.optionsWrapper}>
          <div
            className={`${styles.option} ${styles.contactOption} ${
              activeForm === "contact" ? styles.active : ""
            } ${activeForm === "quote" ? styles.bottom : ""}`}
            onClick={() => handleFormSwitch("contact")}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleFormSwitch("contact");
            }}
          >
            <h2>Contact Us</h2>
            <div className={styles.description}>
              <p>
                Get in touch with our team for general inquiries and support.
                We're here to help with any questions you might have about our
                services.
              </p>
            </div>
          </div>

          <div
            className={`${styles.option} ${styles.quoteOption} ${
              activeForm === "quote" ? styles.active : ""
            } ${activeForm === "contact" ? styles.bottom : ""}`}
            onClick={() => handleFormSwitch("quote")}
            role="button"
            tabIndex={0}
          >
            <h2>Request a Quote</h2>
            <div className={styles.description}>
              <p>
                Need pricing for a specific project? Fill out our quote form and
                we'll provide you with a detailed estimate tailored to your
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <div
          className={`${styles.formWrapper} ${
            activeForm === "contact" ? styles.visible : ""
          }`}
        >
          <ContactForm />
        </div>
        <div
          className={`${styles.formWrapper} ${
            activeForm === "quote" ? styles.visible : ""
          }`}
        >
          <QuoteForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
