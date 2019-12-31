import React, {Component} from 'react';
import Item from '../components/Item'
import Form from '../components/Form'

class Component1 extends Component {

  render() {
    return (
      <div>
        <h2>This is Component 1</h2>
          {this.props.testItemData.map(item =>
            <Item 
              testItemData={item}
              key={item.id}
            />
          )}
          <Form />
      </div>
    )
  }
}

export default Component1;