import "../Css/Skills.css"
import Skill from "../Components/Skill"
const Skills = () => {
    const skill = [
        {
            img : "https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-file-html-shiny-icon-svg-wikimedia-commons-11.png",
            title : "HTML"
        },
        {
            img : "https://logospng.org/download/css-3/logo-css-3-2048.png",
            title : "CSS"
        },
        {
            img : "https://tse3.mm.bing.net/th/id/OIP.GOdtJREyw5KWYG540s3A9gHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
            title : "Java Script"
        },
        {
            img : "https://tse1.mm.bing.net/th/id/OIP.xJ9csn-63TcFxaxea8eoNwHaHa?r=0&w=1000&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
            title : "React Js"
        }
    ]
    return (
        <>
            <section id="skills" className="Skills">
                <div className="projectTitle">
                    Skills
                </div>
                <div className="listSkills">
                    {skill.map((sk,index)=>
                        <Skill key={index} img={sk.img} title={sk.title} />
                    )}
                </div>
            </section>
        </>
    )
}
export default Skills