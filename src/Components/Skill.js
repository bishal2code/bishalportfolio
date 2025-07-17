
const Skill = ({ img, title }) => {
    return (
        <>
            <div className="Skill">
                <img src={img} alt="Skills" />
                <div className="SkillsDesc">
                    {title}
                </div>
            </div>
        </>
    )
}
export default Skill