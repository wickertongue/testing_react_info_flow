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

  fetchItems() {
    console.log("Fetch Initiated")

    fetch("http://localhost:8080/testItems/")
      .then(response => response.json())
      .then(data => {
        this.setState(
          {
            testItems: data._embedded.testItems,
            isLoading: false
          }
        )
        console.log("Response from Fetch: ", data._embedded.testItems)
        console.log("Fetch Complete")
      })
  }

  postItems(formData) {
    console.log('Post Initiated')

    fetch('http://localhost:8080/testItems/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            name: formData.name,
            description: formData.description
          })
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log('Response from Post: ', data)
        console.log('Post Complete')
      })
  }

  handleSubmit(formData) {
    console.log("Submit Initiated")
    this.postItems();
    this.fetchItems();
    console.log("Submit Complete")
  }

  // handleSubmit(formData) {
  //   var that = this;

  //   return Promise.resolve()
  //     .then(function () {
  //       return that.postItems(formData);
  //     })
  //     .then(function () {
  //       return that.fetchItems();
  //     })
  //     .then(function () {
  //       console.log(" ---- done ----");
  //     });
  // }

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