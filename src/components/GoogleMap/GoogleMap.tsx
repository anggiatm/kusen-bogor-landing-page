// components/GoogleMap.tsx
import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div
      className="mapouter"
    >
      <div
        className="gmap_canvas"
      >
        <iframe
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Toko+Alumuniumn+Cimande+Rolling+Door&t=&z=14&ie=UTF8&iwloc=&output=embed"
          style={{
            width: "100%",
            height: "50vh",
            border: "0",
          }}
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;

