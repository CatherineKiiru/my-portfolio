import "./about.css"
import random from "../../img/random.jpg"


const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img 
                    src={random} 
                    alt=""
                    className="a-img"/>
                </div>
            </div>
            
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className="a-desc">
                    consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                   {/*
                   <div className="a-award">
                       <img src={Award} alt="" className="a-award-img"/>
                   </div> */}
            </div>
        </div>
    )
}
export default About