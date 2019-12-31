import React, { Component } from 'react';

class Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    }
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
                  />
                </td>
              </tr>
              <tr>
                <th>Description: </th>
                <td>
                  <input
                    type="text"
                    placeholder="Description"
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
