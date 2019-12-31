import React, {Component} from 'react';

class Component1 extends Component {

  render() {
    return (
      <div>
        <h2>This is Component 1.</h2>
          <h3>This is the data inside Component 1:</h3>
          <p>{this.props.testItemData[0].id}</p>
          <p>{this.props.testItemData[0].name}</p>
          <p>{this.props.testItemData[0].description}</p>
      </div>
    )
  }

}

export default Component1;