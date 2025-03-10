"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import styles from "../styles/footerLocations.module.scss";

const locationsByState = {
  "New South Wales": {
    Sydney: "/access-consultants-sydney",
    Wollongong: "/access-consultants-wollongong",
    "Central Coast": "/access-consultants-central-coast-nsw",
    "Northern Rivers": "/access-consultants-northern-rivers-nsw",
  },
  Victoria: {
    Melbourne: "/access-consultants-melbourne",
    Richmond: "/access-consultants-richmond",
  },
  Queensland: {
    Brisbane: "/access-consultants-brisbane",
    "Gold Coast": "/access-consultants-gold-coast",
  },
  "Western Australia": {
    Perth: "/access-consultants-perth",
  },
  ACT: {
    Canberra: "/access-consultants-canberra",
  },
  "Northern Territory": {
    Darwin: "/access-consultants-darwin",
  },
  "South Australia": {
    Adelaide: "/access-consultants-adelaide",
  },
};

export default function FooterLocationsSection() {
  const [activeState, setActiveState] = useState(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice("ontouchstart" in window);

    // Add click event listener to handle clicking outside
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${styles.stateDropdown}`)) {
        setActiveState(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleStateClick = (state, e) => {
    if (isTouchDevice) {
      e.preventDefault();
      e.stopPropagation();
      setActiveState(activeState === state ? null : state);
    }
  };

  return (
    <div className={styles.locationsSection}>
      <Link href="/locations">
        <h3>Our Locations</h3>
      </Link>
      <p className={styles.remoteAccess}>Australia-wide via remote access</p>

      <div className={styles.statesGrid}>
        {Object.entries(locationsByState).map(([state, locations]) => {
          const isActive = activeState === state;
          const dropdownClasses = `${styles.locationsDropdown} ${
            isActive ? styles.show : ""
          }`;
          const stateClasses = `${styles.stateDropdown} ${
            isActive ? styles.active : ""
          }`;

          return (
            <div
              key={state}
              className={stateClasses}
              onClick={(e) => handleStateClick(state, e)}
            >
              <p className={styles.stateHeader}>
                <span>{state}</span>
              </p>
              <div className={dropdownClasses}>
                <div className={styles.dropdownBackground}></div>
                <div className={styles.dropdownContent}>
                  {Object.entries(locations).map(([city, url]) => (
                    <div key={city} className={styles.cityItem}>
                      <Link href={url} className={styles.cityLink}>
                        {city}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
