import React, { useEffect, useState, useRef, useContext } from 'react';
import '../../styles/components/bioSection.scss';
import { LeftSectionContext } from '../../pages/Home';
import ThemeSwitchIcon from '../../assets/theme-switch.svg';
import ThemeSwitchFilledIcon from '../../assets/theme-switch-filled.svg';
import MenuIcon from '../../assets/menu.svg';

const BioSection = ({ theme, switchTheme }) => {
  const { currentSectionTitle, setCurrentSectionTitle } =
    useContext(LeftSectionContext);

  const tempSkills =
    'React, Next 13, Node, Express, JavaScript, React Native, Flutter, Redux, REST API, Electron, Dart, HTML5, Tailwind CSS, Bootstrap, CSS, Git, Firebase, MongoDB Atlas, REST API, C++, MySQL, MongoDB, SQLite, Sequelize, Mongoose, PhpMyAdmin, Docker, Visual Studio Code, Android Studio, Postman';

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
    const handleWheel = (e) => {
      e.preventDefault();
      console.log(e.deltaY);
      skillsScrollRef.current.scrollTop += e.deltaY;
    };

    const element = skillGradientTopRef.current;
    element.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      console.log(e.deltaY);
      skillsScrollRef.current.scrollTop += e.deltaY;
    };

    const element = skillGradientBottomRef.current;
    element.addEventListener('wheel', handleWheel);

    return () => {
      document.removeEventListener('wheel', handleWheel);
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
        <h1 className="ownName">Gagan Tripathi</h1>
        <div className="designation">Full-Stack Developer</div>
        <div className="about">
          As a full-stack web developer, I specialize in building web and mobile
          applications using React, JavaScript, React Native, Node, Express, and
          Next. With a good understanding of SQL and NoSQL, I am passionate
          about building intuitive and responsive user interfaces and writing
          efficient, scalable, and maintainable code.
        </div>
        <div className="discordStatus"></div>
      </div>
      <div className="skillsArea">
        <div
          style={{ opacity: skillsListTop > 20 ? 1 : 0 }}
          className="skillsGradient skillsGradientTop"
          ref={skillGradientTopRef}
        ></div>
        <div className="skillListHeading">Tech Used in Projects</div>
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
      <div className="linksAreaBio">
        <div className="linkList">
          {links.map((item) => {
            return (
              <a href={item.link} target="_blank">
                <div className="linkItem">{item.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioSection;
