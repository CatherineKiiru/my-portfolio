import "./intro.css"

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
               </div>
           </div>
           <div className="i-right">right</div>
        </div>
    )
}

export default Intro
