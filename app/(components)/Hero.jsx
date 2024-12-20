import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/hero.module.css";

// Just import the mobile and desktop versions
import handShakeDesktop from "../../public/hero/handShake-largeDesktop.webp";
import graphDesktop from "../../public/hero/graph-largeDesktop.webp";
import shapeLeft from "../../public/hero/shapeLeft.png";
import shapeRight from "../../public/hero/shapeRight.webp";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image
            src={handShakeDesktop}
            alt="Office environment"
            className={styles.slideImage}
            priority
            quality={75}
            placeholder="blur"
            sizes="(max-width: 450px) 450px, (max-width: 640px) 640px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, (max-width: 1440px) 1440px, 1920px"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graphDesktop}
            alt="Document design"
            className={styles.slideImage}
            priority={false}
            quality={75}
            placeholder="blur"
            sizes="100vw"
          />
        </div>
      </div>

      <Image
        src={shapeLeft}
        alt="shape icon"
        className={`${styles.shape} ${styles.shapeLeft}`}
        width={378}
        height={371}
        quality={70}
        priority
      />
      <Image
        src={shapeRight}
        alt="shape icon"
        className={`${styles.shape} ${styles.shapeRight}`}
        width={327}
        height={317.5}
        quality={70}
        priority={false}
      />

      <div className={styles.content}>
        <div className={styles.subHead}>
          <div className={styles.bar}></div>
          <div className={styles.headingWrapper}>
            <h4 className={styles.heading1}>
              Microsoft Development and Consulting
            </h4>
            <h4 className={styles.heading2}>
              With over 25 years of experience...
            </h4>
          </div>
        </div>
        <h1>
          Access<br></br>Experts
        </h1>
        <Link href="/access-online" className="btn">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
