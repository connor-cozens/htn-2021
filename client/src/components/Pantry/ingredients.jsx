import React, { Component } from "react";
 
class Ingredient extends Component {
  state = {
    listitems: ["List Item 1", "List Item 2", "List Item 3"]
  };
 
  render() {
    state = {
        listitems: ["List Item 1", "List Item 2", "List Item 3"]
      };
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li className="list-group-item list-group-item-primary">
              {listitem}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
 
export default Ingredient;