import React from "react";
import Image from "next/image";

import AnimateOnScroll from "../../../components/AnimateOnScroll";

import styles from "../../../styles/howWeWork.module.css";

import magnify from "../../../public/magnify.webp";
import pencils from "../../../public/pencils.webp";
import gears from "../../../public/gears.webp";
import rocket from "../../../public/rocket.webp";
import support from "../../../public/support.webp";
import analysis from "../../../public/analysis.webp";
import testing from "../../../public/testing.webp";

const HowWeWork = () => {
  const steps = [
    {
      icon: magnify,
      title: "Discovery",
      subtitle: "Understanding Your Needs",
      description:
        "We begin by listening. Our consultants meet with your team to understand your business processes, data challenges and objectives. We identify pain points in your current systems, discuss your vision for improvement, and establish clear project goals that align with your business strategy.",
    },
    {
      icon: analysis,
      title: "Analysis",
      subtitle: "Requirements and Feasibility Assessment",
      description:
        "We conduct thorough analysis of your requirements, evaluating technical feasibility, data relationships and system integration needs. Our team assesses whether Access is the optimal solution or if alternative technologies better suit your needs, providing honest recommendations based on factors like user numbers, data volume and scalability requirements.",
    },
    {
      icon: pencils,
      title: "Design",
      subtitle: "Database Architecture and Planning",
      description:
        "With requirements defined, we architect your database solution. This includes designing the data structure, planning user interfaces, mapping workflows and automation, and creating detailed specifications. We present wireframes and prototypes for your review, ensuring the design meets your needs before development begins.",
    },
    {
      icon: gears,
      title: "Development",
      subtitle: "Building Your Solution",
      description:
        "Our developers bring the design to life, building custom forms, reports, queries and VBA automation. We follow coding best practices, implement robust error handling, and build with future maintenance in mind. Throughout development, we maintain regular communication, providing progress updates and incorporating your feedback.",
    },
    {
      icon: testing,
      title: "Testing",
      subtitle: "Quality Assurance and Validation",
      description:
        "Rigorous testing ensures your database performs flawlessly. We conduct functional testing of all features, validate data integrity, test multi-user scenarios, and verify integration with other systems. We involve your team in user acceptance testing, addressing any issues before deployment.",
    },
    {
      icon: rocket,
      title: "Deployment",
      subtitle: "Implementation and Rollout",
      description:
        "We manage the deployment process carefully, whether implementing a new system or migrating from an existing one. This includes data migration, user setup, security configuration, and integration with your IT environment. We can stage rollouts to minimize disruption or implement comprehensive system-wide deployment based on your preferences.",
    },
    {
      icon: support,
      title: "Support",
      subtitle: "Ongoing Maintenance and Training",
      description:
        "Our relationship doesn't end at deployment. We provide comprehensive training for your team, create detailed documentation, and offer ongoing support to ensure long-term success. Whether you need ad-hoc assistance or a comprehensive maintenance contract, we're here to help your database evolve with your business.",
    },
  ];

  return (
    <section className={styles.pageSegment}>
      <div className={styles.underline}>
        <h1>How We Work</h1>
      </div>
      <div className={styles.ourProcess}>
        {steps.map((step, index) => (
          <AnimateOnScroll
            key={index}
            animation="slide-left"
            duration={1}
            delay={0.1 * index}
          >
            <div className={styles.flexHolder}>
              <Image
                src={step.icon}
                width={100}
                height={100}
                alt={step.title}
              />
              <div>
                <h3>{step.title}</h3>
                <h4>{step.subtitle}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
