import React from 'react';
import Graph from './Graph'

class DataInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formValues: {}
    }
  }
  

  handleChange(event) {
    event.preventDefault();
    let formValues = this.state.formValues;
    let name = event.target.name;
    let value = event.target.value;

    formValues[name] = value;

    this.setState({formValues})
  }

  handleSubmit(event) {
    event.preventDefault();
    alert("Name: " + this.state.formValues.name + " Email: " + this.state.formValues.email);
  }

  render(){
    return (
      <>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label> Starting Cash:
          <input type="text" name="startingCash" placeholder="10000 = £10,000" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
        </label><br />
        <label> ROI:
          <input type="text" name="ROI" placeholder="0.1 = 10%" value={this.state.formValues["email"]} onChange={this.handleChange.bind(this)}/>
        </label><br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
      <Graph />
      </>
    )
  }
}

export default DataInput;
