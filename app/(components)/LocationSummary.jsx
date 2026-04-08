// app/(excelConsultants)/(components)/LocationSummary.jsx
import React from "react";

import styles from "../../styles/locationSummary.module.scss";

const LocationSummary = ({ location, service, intro }) => {
  return (
    <div className={styles.summary}>
      <div>
        <strong>Summary:</strong>
        <h2>
          Who are {service} Consultants in {location}?
        </h2>
      </div>

      {/* City-specific intro — unique per location to prevent SERP cannibalisation */}
      {intro && <p className={styles.locationIntro}>{intro}</p>}
    </div>
  );
};

export default LocationSummary;
