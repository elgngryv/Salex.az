import React, { useEffect } from "react";
import "./GlassButton.css"; 
const GlassButton = () => {
  useEffect(() => {
    const feImage = document.querySelector("feImage");
    fetch("https://essykings.github.io/JavaScript/map.png")
      .then((response) => response.blob())
      .then((blob) => {
        const objURL = URL.createObjectURL(blob);
        feImage.setAttribute("href", objURL);
      });
  }, []);

  return (
    <>
      <button className="glass-button">
      </button>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter
          id="glass"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          primitiveUnits="objectBoundingBox"
        >
          <feImage
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            result="map"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="0.02"
            result="blur"
          />
          <feDisplacementMap
            id="disp"
            in="blur"
            in2="map"
            scale="0.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </>
  );
};

export default GlassButton;
