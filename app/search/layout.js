import React from "react";
import PropTypes from "prop-types";

export const metadata = {
  title: "Search Excel Solutions & Services | Excel Experts Australia",
  description:
    "Search across our comprehensive range of Microsoft Excel services, solutions, and expert resources. Find Excel development, VBA programming, and consulting services.",
  keywords: ["Excel services search Australia"],
  canonical: "https://www.excelexperts.com.au/search/",
};

export default function SearchLayout({ children }) {
  return <>{children}</>;
}

SearchLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
