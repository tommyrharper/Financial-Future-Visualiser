import React, { Component } from 'react';

export class DataInput extends Component {
  render() {
    return(
      <div>
        <label htmlfor="startingCash">Starting Cash:</label>
        <input type="text" />
        <br/>
        <label htmlfor="startingCash">Interest Rate</label>
        <input type="text" />
        <input className="btn" type="submit" value="Create Graph" />
      </div>
    ) 
  }
}

export default DataInput;