import React from "react";

const ResponsivePlaceholder = ({
  desktopHeight,
  mobileHeight,
  showSpinner = true,
}) => {
  return (
    <div
      style={{
        width: "100%",
        height: mobileHeight + "px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#fafafa",
        [`@media (min-width: 768px)`]: {
          height: desktopHeight + "px",
        },
      }}
    >
      {showSpinner && <div className="loader">loading...</div>}
    </div>
  );
};

export default ResponsivePlaceholder;
