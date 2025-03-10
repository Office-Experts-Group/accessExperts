import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          Who are {service} Consultants in {location}?
        </h2>
      </div>

      <p>
        The Access Experts team delivers custom database solutions for Sydney
        businesses. We provide database design, Azure cloud migration, SQL
        Server integration, and VBA development. Our Microsoft-certified
        specialists help organisations improve data management through online
        solutions, automation, and integration with Microsoft 365. From system
        upgrades to custom forms and reports, we maximize your database
        efficiency with custom Microsoft Access solutions.
      </p>
    </div>
  );
};

export default LocationSummary;
