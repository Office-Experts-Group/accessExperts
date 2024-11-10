import React from "react";
import Image from "next/image";

import SocialLinks from "./SocialLinks";

import styles from "../styles/footerLogo.module.css";

import logo from "../public/logo200x86.webp";

const FooterLogoSection = () => {
  return (
    <div className={styles.footerLogo}>
      <Image src={logo} alt="logo" width={200} height={86} />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
        aliquam nemo eveniet accusamus ab veniam consectetur perspiciatis.
        Ipsum, harum commodi.
      </p>
      <h3>Follow Us</h3>
      <SocialLinks />
    </div>
  );
};

export default FooterLogoSection;
