import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BigForm extends Component {
  render() {
    const checkboxes = [0, 1, 2];

    return(
        <Form checkboxes={checkboxes} />
    );
  }
}

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [false, false, false]
    }

    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(checkboxId) {
    let newCheckedValues = this.state.checked.map((checkboxState, index) => {
      if(index === checkboxId) {
        return !checkboxState;
      }
      return checkboxState;
    });

    this.setState({
      checked: newCheckedValues
    });
  }

  getCheckedBoxes() {
    let checkedBoxes = this.state.checked.filter(item => item === true);
    return checkedBoxes.length;
  }

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

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  handleCheckboxChange(e) {
    this.props.onCheckboxChange(this.props.id);
  }

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