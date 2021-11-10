import "./intro.css"
import me from "../../img/me.png"

const Intro = () => {
    return (
        <div className ="i" >
           <div className="i-left">
               <div className="i-left-wrapper">
                   <h2 className="i-intro">Hello, my name is</h2>
                   <h1 className="i-name">Catherine</h1>
                   <div className="i-title">
                       <div className="i-title-wrapper">
                          <div className="i-title-item">Content Marketing Specialist</div>
                          <div className="i-title-item">Frontend developer</div>
                          <div className="i-title-item">Technical writer</div>
                          <div className="i-title-item">Photographer</div>                        
                       </div>
                   </div>
                   <p className="i-desc">
                       I am a frontend developer with 5+ years experience in marketing, 
                       web development, and technical writing.
                   </p>
               </div>
               
           </div>
           <div className="i-right">
               .i-bg
               <img src={me} alt="" className="i-img"/> right</div>
        </div>
    )
}

export default Intro
