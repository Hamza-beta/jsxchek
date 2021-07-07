import srcimg from "./insrc.png"
import './style.css'
function convrt(){
    return(
        <div>
<div style={{border:'solid 1px black',maxWidth:'100vw'}}>

 <h1 className="title red">JSX checkpoint</h1>
 <br />
<img src= {srcimg} alt="insrc"></img>
 <br />
 
 
 <img src="/publicsrc.png" alt ="publicsrc" />
</div>

<video width="320" height="240" controls/>

 <source src="myVideo.mp4" type="video/mp4" />
 </div>
)
}
export default convrt