import React, { useEffect, useState, useRef, useContext } from 'react';
import '../../styles/components/bioSection.scss';
import { LeftSectionContext } from '../../pages/Home';
import BackIconDarkMode from '../../assets/back-dark.svg';

const BioSection = ({ theme, switchTheme }) => {
  const {
    currentSectionTitle,
    setCurrentSectionTitle,
    NavigateToHome,
    currentSelectedProjectData,
  } = useContext(LeftSectionContext);

  const tempSkills = currentSelectedProjectData.data.tech;

  const [skills, setSkills] = useState(tempSkills.split(', '));

  const [links, setLinks] = useState([
    { name: 'GitHub', link: 'https://github.com/gagantripathi22/' },
    { name: 'LinkedIn', link: 'http://linkedin.com/in/gagantripathi22/' },
  ]);

  const [skillsListTop, setSkillsListTop] = useState(0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [menuIconStateClass, setMenuIconStateClass] = useState(false);

  const [menuIconCircleAnimationDuration, setMenuIconCircleAnimationDuration] =
    useState(0);

  const skillsScrollRef = useRef(null);
  const skillGradientTopRef = useRef(null);
  const skillGradientBottomRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = skillsScrollRef.current;
      setSkillsListTop(el.scrollTop);
    };

    const element = skillsScrollRef.current;
    element.addEventListener('scroll', handleScroll);

    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = skillGradientTopRef.current;
      // setSkillsListTop(el.scrollTop);
      console.log(el.offsetTop);
    };

    const element = skillGradientTopRef.current;
    element.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      element.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, []);

  useEffect(() => {
    const runMenuAnimation = () => {
      setMenuIconStateClass((prev) => !prev);
      setMenuIconCircleAnimationDuration(200);
      setTimeout(() => {
        setMenuIconCircleAnimationDuration(0);
      }, 2200);
    };
    const timer = setInterval(() => runMenuAnimation(), 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bioArea">
      <div className="bioHeader">
        <div className="menuArea">
          <div className="menuButtons">
            <div className="menuBtn">
              <a
                href="https://gagantripathi22.github.io/portfolio/"
                target="_blank"
              >
                Portfolio V1
              </a>
            </div>
            <div
              className="menuBtn"
              onClick={() => {
                switchTheme();
              }}
            >
              <a>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</a>
            </div>
          </div>
        </div>
      </div>
      <div className="nameAndDiscord">
        <h1 className="ownName">{currentSelectedProjectData.data.name}</h1>
        <div className="designation">
          {currentSelectedProjectData.data.discription}
        </div>
        <div className="discordStatus"></div>
      </div>
      <div className="skillsArea">
        <div
          style={{ opacity: skillsListTop > 20 ? 1 : 0 }}
          className="skillsGradient skillsGradientTop"
          ref={skillGradientTopRef}
        ></div>
        <div className="skillListHeading">Tech Used</div>
        <div className="skillsList" ref={skillsScrollRef}>
          {skills.map((item) => {
            return <div className="skillsItem">{item}</div>;
          })}
        </div>
        <div
          className="skillsGradient skillsGradientBottom"
          ref={skillGradientBottomRef}
        ></div>
      </div>
      <div className="linksArea">
        <div className="bioSectionBackBtn" onClick={() => NavigateToHome()}>
          {/* Go Back */}
          <img src={BackIconDarkMode}></img>
        </div>
        <div className="linkList">
          {currentSelectedProjectData.data.github && (
            <a href={currentSelectedProjectData.data.github} target="_blank">
              <div className="linkItem">Github</div>
            </a>
          )}
          {currentSelectedProjectData.data.website && (
            <a href={currentSelectedProjectData.data.website} target="_blank">
              <div className="linkItem">Visit</div>
            </a>
          )}
          {currentSelectedProjectData.data.download && (
            <a href={currentSelectedProjectData.data.download} target="_blank">
              <div className="linkItem">Download</div>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BioSection;
