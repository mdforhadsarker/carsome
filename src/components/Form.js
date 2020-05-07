import React, { Component } from 'react'
import DateField from './DateField'
import TimeField from './TimeField'




export default class Form extends Component {
  state = {
    times:[ ]
  }
  
  
  onSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }
  render() {
  
    return (
      <div>
      <DateField />
      <TimeField />
      <button 
        className="form-submit-button" 
        onClick ={e => this.onSubmit(e)} 
      >
        Submit
      </button>
      </div>
      
    );
  }
}
