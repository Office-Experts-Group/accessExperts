import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/hero.module.css";

import handShake from "../../public/hero/handShake.webp";
import graph from "../../public/hero/graph.webp";
import shapeLeft from "../../public/hero/shapeLeft.png";
import shapeRight from "../../public/hero/shapeRight.webp";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.slider}>
        <div className={styles.slide}>
          <Image
            src={handShake}
            alt="Office environment"
            className={styles.slideImage}
            sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1920px"
            quality={75}
            priority
            placeholder="blur"
            blurDataURL={handShake.blurDataURL}
            width={1920}
            height={1080}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graph}
            alt="Document design"
            className={styles.slideImage}
            sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1920px"
            quality={75}
            placeholder="blur"
            blurDataURL={graph.blurDataURL}
            width={1920}
            height={1080}
          />
        </div>
      </div>

      {/* Decorative images can load lazy */}
      <Image
        src={shapeLeft}
        alt=""
        className={`${styles.shape} ${styles.shapeLeft}`}
        width={378}
        height={371}
        quality={60}
      />
      <Image
        src={shapeRight}
        alt=""
        className={`${styles.shape} ${styles.shapeRight}`}
        width={327}
        height={317.5}
        quality={60}
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
          Access
          <br />
          Experts
        </h1>
        <Link href="/access-online" className="btn">
          Discover More
        </Link>
      </div>
    </section>
  );
};

export default Hero;
