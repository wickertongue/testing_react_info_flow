import React, {Component} from 'react';
import Component1 from '../components/Component1'

class Container extends Component {

  render () {
    return (
      <div>
        <p>This is the Container</p>
        <Component1/>
      </div>
    )
  }
}

export default Container;