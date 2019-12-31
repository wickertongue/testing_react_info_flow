import React, {Component} from 'react';
import Component1 from '../components/Component1'

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      testItems: []
    }
  };

async componentDidMount() {
  const testItemsFetch = await fetch("http://localhost:8080/testItems/")
  const testItems = await testItemsFetch.json();
  this.setState({
    testItems: testItems._embedded.testItems,
  });
  this.setState({ isLoading: false })
};

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <p>This is the Container</p>
        <Component1 />
      </div>
    )
  }
};

export default Container;