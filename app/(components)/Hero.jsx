// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// import styles from "../../styles/hero.module.css";

// // Import all sizes for hero images
// import handShakeLarge from "../../public/hero/handShake-largeDesktop.webp";
// import handShakeDesktop from "../../public/hero/handShake-desktop.webp";
// import handShakeTablet from "../../public/hero/handShake-tablet.webp";
// import handShakeMobile from "../../public/hero/handShake-mobile.webp";

// import graphLarge from "../../public/hero/graph-largeDesktop.webp";
// import graphDesktop from "../../public/hero/graph-desktop.webp";
// import graphTablet from "../../public/hero/graph-tablet.webp";
// import graphMobile from "../../public/hero/graph-mobile.webp";

// import shapeLeft from "../../public/hero/shapeLeft.png";
// import shapeRight from "../../public/hero/shapeRight.webp";

// const Hero = () => {
//   return (
//     <section className={styles.heroSection}>
//       <div className={styles.slider}>
//         <div className={styles.slide}>
//           <picture>
//             <source media="(min-width: 1920px)" srcSet={handShakeLarge.src} />
//             <source media="(min-width: 1024px)" srcSet={handShakeDesktop.src} />
//             <source media="(min-width: 768px)" srcSet={handShakeTablet.src} />
//             <Image
//               src={handShakeMobile}
//               alt="Office environment"
//               className={styles.slideImage}
//               priority
//               quality={75}
//               sizes="(max-width: 768px) 450px, (max-width: 1024px) 1024px, (max-width: 1920px) 1440px, 1920px"
//               placeholder="blur"
//               loading="eager"
//             />
//           </picture>
//         </div>
//         <div className={styles.slide}>
//           <picture>
//             <source media="(min-width: 1920px)" srcSet={graphLarge.src} />
//             <source media="(min-width: 1024px)" srcSet={graphDesktop.src} />
//             <source media="(min-width: 768px)" srcSet={graphTablet.src} />
//             <Image
//               src={graphMobile}
//               alt="Document design"
//               className={styles.slideImage}
//               priority
//               quality={75}
//               sizes="(max-width: 768px) 450px, (max-width: 1024px) 1024px, (max-width: 1920px) 1440px, 1920px"
//               placeholder="blur"
//               loading="eager"
//             />
//           </picture>
//         </div>
//       </div>

//       <Image
//         src={shapeLeft}
//         alt="shape icon"
//         className={`${styles.shape} ${styles.shapeLeft}`}
//         width={378}
//         height={371}
//         priority
//         quality={70}
//       />
//       <Image
//         src={shapeRight}
//         alt="shape icon"
//         className={`${styles.shape} ${styles.shapeRight}`}
//         width={327}
//         height={317.5}
//         priority
//         quality={70}
//       />
import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "../../styles/hero.module.css";

// Just import the mobile and desktop versions
import handShakeMobile from "../../public/hero/handShake-mobile.webp";
import handShakeDesktop from "../../public/hero/handShake-largeDesktop.webp";
import graphMobile from "../../public/hero/graph-mobile.webp";
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
            sizes="100vw"
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={graphDesktop}
            alt="Document design"
            className={styles.slideImage}
            priority
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
        priority
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
