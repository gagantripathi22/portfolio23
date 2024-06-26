import React, { useEffect, useState, useRef, useContext } from 'react';
import '../../styles/components/bioSection.scss';
import { LeftSectionContext } from '../../pages/Home';
import ThemeSwitchIcon from '../../assets/theme-switch.svg';
import ThemeSwitchFilledIcon from '../../assets/theme-switch-filled.svg';
import MenuIcon from '../../assets/menu.svg';
import { pickRandomSkillItemColorScheme } from '../../sevices/skillSetColorScheme';

const BioSection = ({ theme, switchTheme }) => {
  const { currentSectionTitle, setCurrentSectionTitle } =
    useContext(LeftSectionContext);

  const tempSkills =
    'React, Next, Node, Express, JavaScript, React Native, Flutter, Redux, Svelte, REST API, Electron, MySQL, MongoDB, Dart, HTML5, Tailwind CSS, Bootstrap, CSS, Git, Firebase, MongoDB, REST API, Sequelize, Mongoose, Docker, Visual Studio Code, Android Studio, Postman';

  const [skills, setSkills] = useState(tempSkills.split(', ').map(skill => ({
    name: skill,
    colorSchema: pickRandomSkillItemColorScheme()
  })));

  const [links, setLinks] = useState([
    { name: 'LinkedIn', colorSchema: {background: '#ebebeb', text: '#181818'}, link: 'http://linkedin.com/in/gagantripathi22/' },
    { name: 'GitHub', colorSchema: {background: '#ebebeb', text: '#181818'}, link: 'https://github.com/gagantripathi22/' },
  ]);

  useEffect(() => {
    console.log(skills);

  }, [skills])

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
      <svg id="stroke" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
        <defs>
          <path id="line" d="M2 2c49.7 2.6 100 3.1 150 1.7-46.5 2-93 4.4-139.2 7.3 45.2-1.5 90.6-1.8 135.8-.6" fill="none" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>
        </defs>
      </svg>
      <div className="bioHeader">
        <div className="menuArea">
          <div className="menuButtons">
            <div className="menuBtn">
              <a
                href="https://gagantripathi22.github.io/portfolio/"
                target="_blank"
              >
                Portfolio V1
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#line"></use>
                </svg>
                <svg class="button-stroke" viewBox="0 0 154 13">
                  <use href="#line"></use>
                </svg>
              </a>
              
            </div>
            <div
              className="menuBtn"
              onClick={() => {
                switchTheme();
              }}
            >
              <a>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              <svg class="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
              </svg>
              <svg class="button-stroke" viewBox="0 0 154 13">
                <use href="#line"></use>
              </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="nameAndDiscord">
        <h1 className="ownName">Gagan Tripathi</h1>
        <div className="designation">Full-Stack Developer</div>
        <div className="about">
          I am passionate about building intuitive and responsive products and writing efficient, scalable, and maintainable code.
        </div>
        <div className="discordStatus"></div>
      </div>
      <div className="skillsArea">
        <div
          style={{ opacity: skillsListTop > 20 ? 1 : 0 }}
          className="skillsGradient skillsGradientTop"
          ref={skillGradientTopRef}
        ></div>
        <div className="sectionHeading">Tech Used in Projects</div>
        <div className="skillsList" ref={skillsScrollRef}>
          {skills.map((item) => {
            return <div className="skillsItem" style={{background: item.colorSchema.background, color: item.colorSchema.text}}>{item.name}</div>;
            // return <div className="skillsItem" style={{background: 'black', color: 'white'}}>{item.name}</div>;
          })}
        </div>
        <div
          className="skillsGradient skillsGradientBottom"
          ref={skillGradientBottomRef}
        ></div>
      </div>
      <div className="linksAreaBio">
      <div className="sectionHeading">Contact</div>
        <div className="linkList">
          {links.map((item) => {
            return (
              <a href={item.link} target="_blank">
                <div className="linkItem" style={{background: item.colorSchema.background, color: item.colorSchema.text}}>{item.name}</div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BioSection;


// const [tempColorSchema] = useState(colorSchema)
// i