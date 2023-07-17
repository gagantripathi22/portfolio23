import React, { useState, createContext, useEffect } from "react";
import "../styles/pages/Home.css";
import BioSection from "../components/BioSection/index";
import ProjectDetailSection from "../components/ProjectDetailSection";
import ProjectSection from "../components/ProjectSection";
import ProjectScreenshotSection from "../components/ProjectScreenshotSection";

export const LeftSectionContext = createContext("");

const Home = () => {
  const [currentSectionTitle, setCurrentSectionTitle] = useState("bioSection");
  const [sectionChangeAnimationOffset, setSectionChangeAnimationOffset] =
    useState("translateY(0px)");
  const [sectionChangeAnimationOpacity, setSectionChangeAnimationOpacity] =
    useState(1);
  const [sectionChangeAnimationClass, setSectionChangeAnimationClass] =
    useState(0);
  const [currentLeftSection, setCurrentLeftSection] = useState(0);
  const [currentRightSection, setCurrentRightSection] = useState(0);
  const [currentSelectedProjectData, setCurrentSelectedProjectData] =
    useState(null);

  // useEffect(() => {
  //   BioDetailSectionAnimatinoHandler();
  // }, [currentSectionTitle]);

  const BioDetailSectionAnimatinoHandler = () => {
    setSectionChangeAnimationClass(1);
    setTimeout(() => {
      setCurrentLeftSection(1);
    }, 650);
    setTimeout(() => {
      setCurrentRightSection(1);
    }, 850);
    setTimeout(() => {
      setSectionChangeAnimationClass(0);
    }, 1500);
  };

  const NavigateToHome = () => {
    setSectionChangeAnimationClass(1);
    setTimeout(() => {
      setCurrentLeftSection(0);
    }, 650);
    setTimeout(() => {
      setCurrentRightSection(0);
    }, 850);
    setTimeout(() => {
      setSectionChangeAnimationClass(0);
    }, 1500);
  };

  return (
    <LeftSectionContext.Provider
      value={{
        currentSectionTitle,
        setCurrentSectionTitle,
        BioDetailSectionAnimatinoHandler,
        currentSelectedProjectData,
        setCurrentSelectedProjectData,
        NavigateToHome,
      }}
    >
      <div className="homeContainer">
        <div className="innerSections">
          <section
            className={
              sectionChangeAnimationClass === 0
                ? "leftSection"
                : "leftSectionAnimation"
            }
          >
            <section className="bioSection">
              {currentLeftSection === 0 ? (
                <BioSection />
              ) : (
                <ProjectDetailSection />
              )}
            </section>
          </section>
          <section
            className={
              sectionChangeAnimationClass === 0
                ? "rightSection"
                : "rightSectionAnimation"
            }
          >
            <section className="projectsSection">
              {currentRightSection === 0 ? (
                <ProjectSection />
              ) : (
                <ProjectScreenshotSection />
              )}
            </section>
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
    </LeftSectionContext.Provider>
  );
};

export default Home;
