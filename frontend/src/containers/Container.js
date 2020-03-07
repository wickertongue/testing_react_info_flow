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
    fetch("http://localhost:8080/testItems/")
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            testItems: data._embedded.testItems,
            isLoading: false
          }
        )
        console.log("Results from Fetch: ", data._embedded.testItems)
      })
  }

  async postItems(formData) {
    fetch("http://localhost:8080/testItems", {
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
    .then(res => res.json())
    .then(data => {
      console.log("Results from Post: ", data)
    })
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