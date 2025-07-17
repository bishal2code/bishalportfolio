import "../Css/NavBar.css";
import { useLenis } from './LenixContex';

const NavBar = ({currentSection}) => {
  const lenisRef = useLenis();

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: 0, // you can set this to -80 if you have a sticky navbar
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <div className="NavBar">
      <div className="Logo">Bishal..</div>
      <div className="NavLinks">
        <div className="LargeLinks">
          <a href="#home" className={currentSection === "home" ? "active":"no"} onClick={(e)=> handleScroll(e,"home")}>Home</a>
          <a href="#projects" className={currentSection === "projects" ? "active": "no"} onClick={(e)=> handleScroll(e,"projects")} >Projects</a>
          <a href="#skills" className={currentSection === "skills" ? "active" : "no"} onClick={(e)=> handleScroll(e,"skills")} >Skills</a>
          <a href="#contact" className={currentSection === "contact" ? "active" : "no"} onClick={(e)=> handleScroll(e,"contact")} >Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
