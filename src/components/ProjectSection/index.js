import React, { useEffect, useState, useContext, useCallback } from "react";
import "../../styles/components/projectSection.css";
import fetchProjects from "../../sevices/firebase/fetchProjects";
import { LeftSectionContext } from "../../pages/Home";
import ExpandIcon from "../../assets/expand.svg";

const ProjectSection = () => {
  const {
    currentSectionTitle,
    setCurrentSectionTitle,
    BioDetailSectionAnimatinoHandler,
    setCurrentSelectedProjectData,
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
      {projects.map((item) => {
        return (
          <div className="projectItem" 
            onClick={() => {
              BioDetailSectionAnimatinoHandler();
              setCurrentSelectedProjectData(item);
            }}
            key={item.id}
          >
            <div
              className="projectItemImageArea"
              onClick={() => {
                BioDetailSectionAnimatinoHandler();
                setCurrentSelectedProjectData(item);
              }}
            >
              {/* <div className="expandBtn" title="Expand">
                <img className="expandIcon" src={ExpandIcon}></img>
              </div> */}
              <img src={item.data.img} className="projectItemImage"></img>
            </div>
            <div className="projectItemDetailArea">
              <div>
                <h1
                  className="projectItemTitle"
                  // onClick={() => {
                  //   BioDetailSectionAnimatinoHandler();
                  //   setCurrentSelectedProjectData(item);
                  // }}
                >
                  {item.data.name}
                </h1>
                <div className="projectItemTitleHoverUnderline"></div>
              </div>
              {/* <div className="projectItemActionBtnList">
                {item.data.github && (
                  <a href={item.data.github} target="_blank">
                    <div className="projectItemActionBtn">Github</div>
                  </a>
                )}
                {item.data.website && (
                  <a href={item.data.website} target="_blank">
                    <div className="projectItemActionBtn">Visit</div>
                  </a>
                )}
                {item.data.download && (
                  <a href={item.data.download} target="_blank">
                    <div className="projectItemActionBtn">Download</div>
                  </a>
                )}
              </div> */}
              <span className="projectItemType">{item.data.shortDescription}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;
