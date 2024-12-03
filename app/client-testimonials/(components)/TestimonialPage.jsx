// TestimonialPage.jsx
import React from "react";

import TestimonialCard from "../../../components/TestimonialCard";
import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/testimonialPage.module.css";

const TestimonialPage = ({ testimonials }) => {
  return (
    <section className={styles.testimonialPage}>
      <h2 className={styles.padded}>
        We are grateful to our clients for providing the following references
        <br></br>
        and feedback for our consultants and our services.
      </h2>
      <div className={styles.testimonialGrid}>
        {testimonials.map((testimonial, index) => {
          // Show first 3 testimonials without animation
          if (index < 3) {
            return (
              <div key={testimonial.contact}>
                <TestimonialCard
                  content={testimonial.content}
                  name={testimonial.name}
                  contact={testimonial.contact}
                  image={testimonial.image}
                />
              </div>
            );
          }

          // Animate remaining testimonials
          return (
            <AnimateOnScroll key={testimonial.contact} animation="fade-up">
              <TestimonialCard
                content={testimonial.content}
                name={testimonial.name}
                contact={testimonial.contact}
                image={testimonial.image}
              />
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialPage;
