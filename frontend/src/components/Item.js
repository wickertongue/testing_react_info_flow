import React, {Component} from 'react';

class Item extends Component {

  render() {
    return(
      <span>
        <h4>This is Item {this.props.testItemData.id}</h4>
        <table>
          <tbody>
            <tr>
              <th>Id:</th>
              <td>{this.props.testItemData.id}</td>
            </tr>
            <tr>
              <th>Name:</th>
              <td>{this.props.testItemData.name}</td>
            </tr>
            <tr>
              <th>Description:</th>
              <td>{this.props.testItemData.description}</td>
            </tr>
          </tbody>
        </table>
      </span>
  )}

}

export default Item;