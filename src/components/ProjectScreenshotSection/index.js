import React, { useEffect, useState, useContext } from "react";
import "../../styles/components/projectSection.css";
import fetchProjects from "../../sevices/firebase/fetchProjects";
import { LeftSectionContext } from "../../pages/Home";
import BackIcon from "../../assets/back.svg";
import BackIconDarkMode from "../../assets/back-dark.svg";

const ProjectSection = ({ theme }) => {
  const {
    currentSectionTitle,
    setCurrentSectionTitle,
    BioDetailSectionAnimatinoHandler,
    NavigateToHome,
    currentSelectedProjectData,
  } = useContext(LeftSectionContext);
  let screenshots = [];
  if (currentSelectedProjectData.screenshots.length > 1) {
    screenshots = [
      {
        url: currentSelectedProjectData.data.img,
      },

      ...currentSelectedProjectData.screenshots,
    ];
  } else {
    screenshots = [
      {
        url: currentSelectedProjectData.data.img,
      },
    ];
  }

  useEffect(() => {
    console.log("projects : ", screenshots);
  }, []);
  return (
    <div className="projectArea">
      <div
        className="screenshotSectionBackBtn"
        onClick={() => NavigateToHome()}
      >
        {/* Go Back */}
        <img src={BackIconDarkMode}></img>
      </div>
      {screenshots.map((item) => {
        return (
          <div className="screenshotItem">
            <div className="screenshotImageArea">
              <img src={item.url} className="projectItemImage"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;
