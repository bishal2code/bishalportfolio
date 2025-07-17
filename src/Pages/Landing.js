// From Font Awesome (fa)
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import "../Css/Landing.css"
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <>
        <div className='boxBox'>
<div className='boxes'>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
            <div className='box'></div>
        </div>
        </div>
        
            <section id='home' className="LandingPage">
                <div className="myInfos">
                    <div className="PersonalInformation">
                        <div className="textInfo">
                            <div className="devName">
                                Bishal Dhakal
                            </div>
                            <div className="whoareyou">
                                I'm a&nbsp;
                                <span data-text={"Front End Developer."} style={{"--i" : 1}}> Front End Developer.</span>
                            </div>
                            <div className="InfoDesc">
                                A passionate full-stack developer with a focus on building efficient, user-friendly digital solutions. Skilled in React.js, Node.js, Python, and Django, with hands-on experience in creating responsive web applications.
                            </div>
                            <div className="MyLinks">
                                <button>Download CV</button>
                                <Link><FaLinkedin className='socialLink' /></Link>
                                <Link><FaGithub className='socialLink'  /></Link>
                                <Link><FaInstagram className='socialLink'  /></Link>
                            </div>
                        </div>
                    </div>
                    <div className='MyImage'>
                        <div className='Border'></div>
                        <img src='https://i.postimg.cc/xTwsxYGs/Chat-GPT-Image-Jul-15-2025-11-13-08-AM-removebg-preview.png' alt='Developer Img'/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Landing