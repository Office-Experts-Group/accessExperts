// import React from "react";
// import Image from "next/image";

// import styles from "../styles/testimonialsCard.module.css";

// const TestimonialCard = ({ content, name, contact, image }) => {
//   // Add defensive check
//   if (!image || typeof image !== "object") {
//     console.error("Invalid image prop:", image);
//     return null;
//   }

//   return (
//     <div className={styles.cardWrapper}>
//       <div className={styles.card}>
//         <p>&quot;{content}&quot;</p>
//         <div className={styles.imageWrapper}>
//           <Image
//             src={image.src}
//             alt={`${contact}'s logo`}
//             width={image.width}
//             height={image.height}
//           />
//         </div>
//       </div>
//       <h4>{name}</h4>
//       <h5>{contact}</h5>
//     </div>
//   );
// };

// export default TestimonialCard;

import React from "react";
import Image from "next/image";
import styles from "../styles/testimonialsCard.module.css";

const TestimonialCard = ({ content, name, contact, image, index }) => {
  const isAboveFold = index < 3;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <p>&quot;{content}&quot;</p>
        {image?.src && (
          <div className={styles.imageWrapper}>
            <Image
              src={image.src}
              alt={contact ? `${contact}'s logo` : "Company logo"}
              width={image.width || 150}
              height={image.height || 150}
              priority={isAboveFold}
              loading={isAboveFold ? undefined : "lazy"}
            />
          </div>
        )}
      </div>
      <h4>{name}</h4>
      <h5>{contact}</h5>
    </div>
  );
};

export default TestimonialCard;
