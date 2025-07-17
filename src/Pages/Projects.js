import "../Css/Projects.css"
import Project from "./Project"
const Projects = ()=>{

   const websites = [
  {
    img: "https://television.mxdwn.com/televisiondev/wp-content/uploads/2025/04/FireShot-Capture-280-Netflix-www.netflix.com_.png",
    title: "Netflix Homepage",
    date: "2025-04-22"
  },
  {
    img: "https://television.mxdwn.com/televisiondev/wp-content/uploads/2025/04/FireShot-Capture-249-Netflix-www.netflix.com_.png",
    title: "Prime Homepage ",
    date: "2025-04-08"
  },
  {
    img: "https://television.mxdwn.com/televisiondev/wp-content/uploads/2025/04/FireShot-Capture-251-Netflix-www.netflix.com_.png",
    title: "Netflix Homepage ",
    date: "2025-04-08"
  }
];


    
    return(<>
    <section id="projects" className="projectsPage">
        <div className="projectTitle">
            Projects
        </div>
        <div className="projectsList">
            {websites.map((web,index)=>
                <Project key={index} img={web.img} name={web.title} date={web.date} />
            )}
        </div>
    </section>
    </>)
}
export default Projects