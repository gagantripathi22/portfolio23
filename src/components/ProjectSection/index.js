import React, { useEffect, useState } from "react";
import "../../styles/components/projectSection.css";
import fetchProjects from "../../sevices/firebase/fetchProjects";

const ProjectSection = () => {
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
    console.log(projects);
  }, []);
  return (
    <div className="projectArea">
      {projects.map((item) => {
        return (
          <div className="projectItem" key={item.id}>
            <div className="projectItemImageArea">
              <img src={item.data.img} className="projectItemImage"></img>
            </div>
            <div className="projectItemDetailArea">
              <h1 className="projectItemTitle">{item.data.name}</h1>
              <div className="projectItemActionBtnList">
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectSection;
