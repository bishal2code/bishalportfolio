const Project = ({img,name,date})=>{
    return(
        <>
        <div className="projectBox">
                <div className="rotaterDiv"></div>
                <div className="projects">
                    <img src={img} alt="Wesite"/>
                    <div className="webDesc">
                        <p className="webTitle">{name}</p>
                        <p className="webDate">{date}</p>
                        <button>Visit.</button>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Project