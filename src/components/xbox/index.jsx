import React from "react";

class XBox extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return <div className='P-xbox'>
      <h3>{this.props.title}</h3>
      <p>{this.props.description}</p>
    </div>
  }
}

export default XBox