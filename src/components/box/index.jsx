import React from "react";

class Box extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div className='P-box'>
      <i className={`icon ${this.props.icon}`}/>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>

     
    </div>
  }
}

export default Box
