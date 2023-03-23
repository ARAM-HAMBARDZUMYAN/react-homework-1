import React from "react";
import './style.scss'
class Footer extends React.Component {
    render() {
      return <footer>
      <div className="container">
          <div className="left section" style={{width:"32%"}}>
              <h2>Contact</h2>

              <p>+123 45 6789012<br/>
              <a href="#">email@domain.com</a><br/>
              <br/>
              234 Hidden Pond Road, Ashland City, TN 37015</p>
          </div>

          <div className="center section" style={{width:"18%"}}>
              <h2>Follow  Us</h2>
               <div className="social">
                  <a href="#"><span className="fab fa-facebook-f"></span></a>
                  <a href="#"><span className="fab fa-instagram"></span></a>
                  <a href="#"><span className="fab fa-instagram"></span></a>
                  <a href="#"><span className="fab fa-youtube"></span></a>
              </div>
          </div>

          <div className="right section" style={{width:"50%"}}>
              <h2>Text widget</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, dolores, quibusdam architecto voluptatem amet fugiat nesciunt placeat provident cumque accusamus itaque voluptate modi quidem dolore optio velit hic iusto vero praesentium repellat commodi ad id expedita cupiditate repellendus possimus unde?</p>
              <p>Eius consequatur nihil quibusdam! Laborum, rerum, quis, inventore ipsa autem repellat provident assumenda labore soluta minima alias temporibus facere distinctio quas adipisci nam sunt explicabo officia tenetur at ea quos doloribus dolorum voluptate reprehenderit architecto sint libero illo et hic.</p>
          </div>
      </div>

      <div className="footer-bottom">
        
              <div className="footerbottom-links">
              <a href="#">Home</a>
              <span>|</span>
              <a href="#">About </a>
              <span>|</span>
              <a href="#">Sidebar</a>
              <span>|</span>
              <a href="#">Contact</a>
              <span>|</span>
              <b><a href="#">Sign up</a></b>
              
              </div>
              <div><p className="text-right">Copyright © 2045, Your name. Designed by <a  href="#">GetTemplate</a></p></div>
      </div>
  </footer>
    }
}

export default Footer