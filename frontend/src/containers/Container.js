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
    this.fetchItems()
  };

  async postItems(formData) {
    console.log("Post Initiated")
    const response = await fetch("http://localhost:8080/testItems/",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: formData.name,
            description: formData.description
          }
        )
      })
    const data = await response.json();
    console.log("Response from Post: ", data)
    console.log("Post Complete")
  }

  async fetchItems() {
    console.log("Fetch Initiated")
    const response = await fetch("http://localhost:8080/testItems/")
    const data = await response.json();
    this.setState(
      {
        testItems: data._embedded.testItems,
      }
    );
    this.setState({ isLoading: false })
    console.log("Response from Fetch: ", data._embedded.testItems)
    console.log("Fetch Complete")
  }

  handleSubmit(formData) {
    console.log("Submit Initiated")
    this.postItems(formData)
    this.fetchItems()
    console.log("Submit Complete")
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