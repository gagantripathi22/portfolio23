import React, { useEffect, useState, useContext } from 'react';
import '../../styles/components/projectSection.css';
import fetchProjects from '../../sevices/firebase/fetchProjects';
import { LeftSectionContext } from '../../pages/Home';
import BackIcon from '../../assets/back.svg';
import BackIconDarkMode from '../../assets/back-dark.svg';

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
    console.log('projects : ', screenshots);
  }, []);
  return (
    <div className="projectScreenshotArea">
      <section className="actionBtns">
        <div
          className="screenshotSectionBackBtn"
          onClick={() => NavigateToHome()}
        >
          {/* Go Back */}
          <img src={theme === 'dark' ? BackIconDarkMode : BackIcon}></img>
        </div>
        <div className="linksSection">
          {currentSelectedProjectData.data.github && (
            <a href={currentSelectedProjectData.data.github} target="_blank">
              <div className="linkBtn">GitHub</div>
            </a>
          )}
          {currentSelectedProjectData.data.website && (
            <a href={currentSelectedProjectData.data.website} target="_blank">
              <div className="linkBtn">Visit</div>
            </a>
          )}
          {currentSelectedProjectData.data.download && (
            <a href={currentSelectedProjectData.data.download} target="_blank">
              <div className="linkBtn">Download</div>
            </a>
          )}
        </div>
      </section>

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
