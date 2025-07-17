import './App.css';
import { NavBar,Landing,Projects,Skills,Contact } from "./Pages/ExportPages"
import { BrowserRouter } from 'react-router-dom';
import {LenisProvider} from './Pages/LenixContex';
import { useEffect,useState } from 'react';
function App() {
const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);

            // Optional: update URL without jumping
            window.history.replaceState(null, null, `#${entry.target.id}`);

          }
        });
      },
      { threshold: 0.6 } // 60% visibility triggers it
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <BrowserRouter>
    <LenisProvider>
      <div style={{ cursor: 'url("https://www.vhv.rs/dpng/d/8-83792_cool-mouse-cursors-png-transparent-png.png"), auto' }} className="App">
        <NavBar currentSection={currentSection} />
        <Landing />
        <Projects/>
        <Skills/>
        <Contact/>
      </div>
      </LenisProvider>
    </BrowserRouter>

  );
}

export default App;
