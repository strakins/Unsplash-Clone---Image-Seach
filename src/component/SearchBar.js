import React from "react";

class SearchBar extends React.Component {
  
  // We use state for controlled element and it will be updated each time there is a change in the input element
  state = { searchTerm: '' }

  // controlling form default behavior

  //Using function component will cause our code to throw 
  // an error so we switch to arrow function for ease of binding this keyword 
  
  // onFormSubmit(e) {
  //   e.preventDefault();
  //   console.log(this.state.searchTerm)
  // }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm)
  }

  // For Uncontrolled Element
  // onInputChange(e) {
  //   // e.preventDefault()
  //   console.log(e.target.value);
  // }

  //   onInputClick() {
  //     console.log("Input Clicked");
  //   }

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form onSubmit={ this.onFormSubmit } className="ui form">
        {/*Howeva we can turn onFormSubmit to arrow function dat takes an event argument to use the functional component  */}
        {/* <form onSubmit={(e) => this.onFormSubmit(e)} className="ui form"> */}
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // For Uncontrolled Element
              // onChange={this.onInputChange}
              // Alternative method could be as below
              // onChange={(e) => {console.log(e.target.value);}}
              //   onClick={this.onInputClick}

              // For controlled Element
              value={this.state.searchTerm}
              onChange={ e => this.setState({searchTerm: e.target.value})}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
