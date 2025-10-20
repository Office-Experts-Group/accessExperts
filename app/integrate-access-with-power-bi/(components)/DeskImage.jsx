import Image from "next/image";
import React from "react";

import integration from "../../../public/integration.webp";

import styles from "../../../styles/intro.module.css";

const DeskImage = () => {
  return (
    <section
      id="your"
      className={styles.deskImage}
      style={{
        marginTop: "0rem",
        backgroundColor: "transparent",
      }}
    >
      <Image
        src={integration}
        alt="integration in scrabble letters"
        width={1200}
        height={300}
      />
    </section>
  );
};

export default DeskImage;
