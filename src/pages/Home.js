import React from "react";
import "../styles/pages/Home.css";
import BioSection from "../components/BioSection/index";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="innerSections">
        <section className="bioSection">
          <BioSection />
        </section>
        <section className="projectsSection">
          <ProjectSection />
        </section>
      </div>
      <div className="mainBorders">
        <div className="lineVerticle lineVerticleLeft"></div>
        <div className="lineVerticle lineVerticleRight"></div>
        <div className="lineHorizontal lineHorizontalTop"></div>
        <div className="lineHorizontal lineHorizontalBottom"></div>
      </div>
      <div className="gradientBorders">
        <div className="horizontalGradientBorder horizontalGradientBorderTop"></div>
        <div className="horizontalGradientBorder horizontalGradientBorderBottom"></div>
      </div>
    </div>
  );
};

export default Home;
