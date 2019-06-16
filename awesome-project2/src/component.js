import React, { Component } from 'react';

class RenderData extends Component {
  state = {
  }

  componentDidMount() {
    const { fileName } = this.props;
    fetch(`http://localhost:3000/api/test/${fileName}`)
      .then((data) => { console.log(data) });
  }

  render() {
    const { fileName } = this.props;
    return (<div>{fileName}</div>);
  }
}


export default RenderData;
