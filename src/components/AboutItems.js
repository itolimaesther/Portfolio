import React from "react";



const AboutItems = ({ headshot }) => {
  return (
    <div className="about-content">
      <div className="l-grid-left bg-color-white l-height-100 abt-image-grid">
        <img
          className="about--photo u-margin-top-medium u-margin-left-huge"
          data-aos="zoom-in-down"
          src={headshot}
          alt="my headshot"
        />
      </div>

    </div>
  );
};

export default AboutItems;

