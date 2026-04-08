import React from "react";

import ServicesCard from "../../components/ServicesCard";
import AnimateOnScroll from "../../components/AnimateOnScroll";
import CardIntersectionWrapper from "../../components/CardIntersectionWrapper";

import styles from "../../styles/services.module.css";

import dataSol from "../../public/microsoft/dataSolNoBG.webp";
import azure from "../../public/microsoft/azureNoBG.webp";
import integrate from "../../public/microsoft/integrateNoBG.webp";
import upgrades from "../../public/microsoft/upgradesNoBG.webp";

const ServicesLocation = ({ location, content }) => {
  return (
    <section className={styles.services}>
      <AnimateOnScroll animation="slide-left" delay={0} duration={1.5}>
        <div className={styles.content}>
          <div className={styles.subBox}>
            <p>
              Design, Development and Consulting
              <span> for Microsoft Access Solutions</span>
            </p>
          </div>
          <h2>Microsoft Access Services - {location}</h2>
          <p>{content?.p1}</p>
          <p style={{ marginTop: ".8rem" }}>{content?.p2}</p>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-down" delay={0} duration={1.5}>
        <div className={styles.cards}>
          <CardIntersectionWrapper>
            <ServicesCard
              src={dataSol}
              alt={"Office environment"}
              h3={"Microsoft Database Solutions"}
              li={[
                "Need a reliable database built by experts with 15+ years experience?",
                "We build cost effective database solutions in most Microsoft technologies.",
              ]}
              link={
                "https://www.officeexperts.com.au/services/by-business-solution/database-development-and-solutions"
              }
              linkText={"Database Solutions"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={azure}
              alt={"Access/Azure Cloud Solutions"}
              h3={"Access/Azure Cloud Solutions"}
              li={[
                "Need an Access database setup to be used remotely?",
                "Using Azure in combination with Access we can setup a custom, cost effective cloud database to suit your needs.",
              ]}
              link={"/access-azure-cloud-based-solutions"}
              linkText={"Cloud Solutions"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={integrate}
              alt={"3rd Party Product Integration"}
              h3={"3rd Party Product Integration"}
              li={[
                "Need an accounting package, CRM, 3rd party product or Office app linked to Access?",
                "Want to extend 3rd party product functionality with Access?",
              ]}
              link={"/3rd-party-product-integration"}
              linkText={"Integration"}
            />
          </CardIntersectionWrapper>
          <CardIntersectionWrapper>
            <ServicesCard
              src={upgrades}
              alt={"Upgrades and Conversions"}
              h3={"Upgrades and Conversions"}
              li={[
                "Have a database that needs upgrading or is failing after upgrading?",
                "Have a database that needs to be converted from or to another format?",
              ]}
              link={"/upgrades-and-migration"}
              linkText={"Upgrades and Migration"}
            />
          </CardIntersectionWrapper>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default ServicesLocation;
