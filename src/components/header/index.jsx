import React from "react";
import Logo1 from '../../assets/images/logo1.png'
import './style.scss'

class Header extends React.Component {
  render() {
    return <header>
            <nav className="navbar">
        <div className="brand-logo"
         style={{backgroundImage:`url('${Logo1}')`}}>
        </div>
       
        <div className="navbar-links">
          <ul>
            <li><a href="#"style={{color:"white"}}>Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">More Pages</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#" className="navbar-linksbutton">SIGN IN / SIGN UP</a></li>
         </ul>
         </div>
      </nav>
    </header>
  }
}

export default Header