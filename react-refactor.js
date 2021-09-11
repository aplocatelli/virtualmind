import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//component with the required lines described by the React Refactor Exercise
class BigForm extends Component {
  render() {
    const checkboxes = [0, 1, 2];

    return(
        <Form checkboxes={checkboxes} />
    );
  }
}

//component containing the wrapping div, the text showing how many checkboxes are checked, and the 3 checkboxes
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [false, false, false] //the initial state of the checkboxes
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this); //handler for when a checkbox is checked/unchecked
  }

  //updates the states array when some checkbox is checked/unchecked
  handleCheckboxChange(checkboxId) {
    //for each state, verify if it belongs to the changed checkbox and in case it does, toggle its value
    let newCheckedValues = this.state.checked.map((checkboxState, index) => {
      if(index === checkboxId) {
        return !checkboxState;
      }
      return checkboxState;
    });

    //updates the array of states
    this.setState({
      checked: newCheckedValues
    });
  }

  //returns the amount of checked checkboxes
  getCheckedBoxes() {
    let checkedBoxes = this.state.checked.filter(item => item === true);
    return checkedBoxes.length;
  }

  //displays the amount of checked checkboxes and, for each id in the checkboxes array, creates its own component
  render() {
    return (
      <div className="form">
        <span>Checked boxes: {this.getCheckedBoxes()}</span> 
        {this.props.checkboxes.map(id => 
          <Checkbox key={id} id={id} stateValue={this.state.checked[id]} onCheckboxChange={this.handleCheckboxChange}/>)} 
      </div>
    );
  }
}

//component for each input with type checkbox 
class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  //handler for when a checkbox is checked/unchecked
  handleCheckboxChange(e) {
    this.props.onCheckboxChange(this.props.id);
  }

  //display the checkbox and its label in a span
  render() {
    return (
      <div className="checkbox-wrapper">
        <span>checkbox {this.props.id}</span>
        <input value={this.props.stateValue} onChange={this.handleCheckboxChange} type="checkbox" />
      </div>
    );
  }
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);