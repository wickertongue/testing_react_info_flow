import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault(event);
    const name = this.state.name.trim();
    const description = this.state.description.trim();
    if (!name || !description ) {
      return
    }
    this.props.handleSubmit({ name: name, description: description })
    this.setState({ name: '', description: '' })
  }

  render() {
    return(
      <span>
        <p>This is the Form.</p>
        <form 
          onSubmit={this.onSubmit}>
          <table>
            <tbody>
              <tr>
                <th>Name: </th>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={this.handleNameChange}
                  />
                </td>
              </tr>
              <tr>
                <th>Description: </th>
                <td>
                  <input
                    type="text"
                    placeholder="Description"
                    onChange={this.handleDescriptionChange}
                  />
                </td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <input 
                    className="submit" 
                    type="submit" 
                    value="submit" />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </span>


    )
  }

}

export default Form;
