import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//component with the required lines described by the React Refactor Exercise
function BigForm() {
  const checkboxes = [0, 1, 2];

  return (
    <Form>
      {checkboxes.map(id => <Checkbox key={id} id={id}/>)}
    </Form>
  );
}

//component containing the wrapping div, the text showing how many checkboxes are checked, and the 3 checkboxes
function Form(props) {
  //the initial state of the checkboxes using the useState Hook
  const [checked, setChecked] = useState([false, false, false]);

  //updates the states array when some checkbox is checked/unchecked
  const handleCheckboxChange = e => {
    let checkboxId = Number(e.target.id);
    
    //for each state, verify if it belongs to the changed checkbox and in case it does, toggle its value
    let newCheckedValues = checked.map((checkboxState, index) => {
      if(index === checkboxId) {
        return !checkboxState;
      }
      return checkboxState;
    });

    //updates the array of states using useState Hook
    setChecked(newCheckedValues);
  }

  //returns the amount of checked checkboxes
  const getCheckedBoxes = () => {
    let checkedBoxes = checked.filter(item => item === true);
    return checkedBoxes.length;
  }

  //displays the amount of checked checkboxes and, for each id in the checkboxes array, creates its own component
  //the form component receives the checkboxes as children, thus the need to map its children. Additionally, we need to add some other properties to the checkbox, this is done using the clone method
  return (
    <div className="form">
      <span>Checked boxes: {getCheckedBoxes()}</span> 

      {React.Children.map(props.children, (child, index) => {
        return React.cloneElement(child, {
          stateValue: checked[index],
          onCheckboxChange: handleCheckboxChange
        })
      })}
    </div>
  );
}

//component for each input with type checkbox 
function Checkbox(props) {

  //display the checkbox and its label in a span
  return (
    <div className="checkbox-wrapper">
      <span>checkbox {props.id}</span>
      <input value={props.stateValue} id={props.id} onChange={props.onCheckboxChange} type="checkbox" />
    </div>
  );
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);