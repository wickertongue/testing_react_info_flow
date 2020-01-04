import React, { Component } from 'react';
import Component1 from '../components/Component1'
import Form from '../components/Form'

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      testItems: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  async componentDidMount() {
    const testItemsFetch = await fetch("http://localhost:8080/testItems/")
    const testItems = await testItemsFetch.json();
    this.setState({
      testItems: testItems._embedded.testItems,
    });
    this.setState({ isLoading: false })
  };

  handleSubmit(formData) {

    fetch("http://localhost:8080/testItems", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        description: formData.description
      })
    })
      .then((res) => res.json())
      .then(console.log("Post complete"))

    fetch("http://localhost:8080/testItems/")
      .then(res => {
        console.log(res)
        console.log(res._embedded)

        // this.setState(prevState => ({
        //   testItems: res._embedded.testItems
        //   })
        // )
      })
    this.setState({ isLoading: false })
    }

render() {
  const { isLoading } = this.state;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>This is the Container</h1>
      <Component1
        testItemData={this.state.testItems}
      />
      <Form
        handleSubmit={this.handleSubmit}
      />
    </div>
  )
}
};

export default Container;