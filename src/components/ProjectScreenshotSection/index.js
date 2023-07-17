import React, { useEffect, useState, useContext } from "react";
import "../../styles/components/projectSection.css";
import fetchProjects from "../../sevices/firebase/fetchProjects";
import { LeftSectionContext } from "../../pages/Home";
import BackIcon from "../../assets/back.svg";

const ProjectSection = () => {
  const {
    currentSectionTitle,
    setCurrentSectionTitle,
    BioDetailSectionAnimatinoHandler,
    NavigateToHome,
  } = useContext(LeftSectionContext);

  const [projects, setProjects] = useState([
    {
      data: {
        name: "Loading",
        tech: "Loading",
        github: "Loading",
        website: "Loading",
      },
    },
  ]);
  useEffect(() => {
    fetchProjects(setProjects);
  }, []);
  return (
    <div className="projectArea">
      <div
        className="screenshotSectionBackBtn"
        onClick={() => NavigateToHome()}
      >
        {/* Go Back */}
        <img src={BackIcon}></img>
      </div>
      {projects.map((item) => {
        return (
          <div className="screenshotItem" key={item.id}>
            <div className="screenshotImageArea">
              <img src={item.data.img} className="projectItemImage"></img>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;
