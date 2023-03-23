import React from "react";
import background from '../../assets/images/bg_header.png'
import './style.scss'
class Section1 extends React.Component {
    render() {
      return <section>
        <div className='section1' style={{backgroundImage:`url('${background}')`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
        
        <h1>AWESOME, CUSTOMIZABLE, FREE</h1>
        <p>PROGRESSUS: free business bootstrap template by GetTemplate</p>
        <div className="section1-buttons">
        <a href="#">MORE INFO</a>
        <button>DOWNLOAD NOW</button>
        </div>
        </div>
      </section>
    }
  }
  
  export default Section1