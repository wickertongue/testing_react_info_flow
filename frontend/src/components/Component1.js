import React, {Component} from 'react';
import Item from '../components/Item'

class Component1 extends Component {

  render() {
    return (
      <div>
        <h2>This is Component 1.</h2>
          <h3>This is the data inside Component 1:</h3>
          {this.props.testItemData.map(item =>
            <Item 
              testItemData={item}
              key={item.id}
            />
          )}
      </div>
    )
  }

}

export default Component1;