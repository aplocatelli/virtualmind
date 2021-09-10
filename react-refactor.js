class BigForm extends React.Component {
  render() {
    const checkboxes = [0, 1, 2];

    return (
      <Form checkboxes={checkboxes} />
    );
  }
}

function Form(props) {
  return (
    props.checkboxes.map(id => <Checkbox key={id} id={id}/>)
  );
}

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  render() {
    return (
      <div className="checkbox-wrapper">
        <span>checkbox {this.props.id}</span>
        <input value={this.state.checked} onChange={() => this.setState({ checked: !this.state.checked })} type="checkbox" />
      </div>
    );
  }
}

ReactDOM.render(
  <BigForm />,
  document.getElementById('container')
);
