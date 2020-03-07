import React, { Component } from 'react';
import Component1 from '../components/Component1'
import Form from '../components/Form'

class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      newItems: false,
      testItems: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  async componentDidMount() {
    this.fetchItems("http://localhost:8080/testItems/")
  };

  async fetchItems() {
    const testItemsFetch = await fetch("http://localhost:8080/testItems/")
    const testItems = await testItemsFetch.json();
    this.setState({
      testItems: testItems._embedded.testItems,
    });
    this.setState({ isLoading: false })
    console.log("Response from Fetch: ", testItems._embedded.testItems)
  }

  async postItems(formData) {
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
    .then((res) => console.log("Response from Post: ", res.json()))
    .then(console.log("Post complete"))
  }

  handleSubmit(formData) {
    this.postItems(formData)
    this.fetchItems()
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