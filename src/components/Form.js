import React, { Component } from 'react'
import DateField from './DateField'
import TimeField from './TimeField'




export default class Form extends Component {

  async onSubmit (e){
    try {

      let result = await fetch('http://localhost:3000/inspection',{
          method: 'post',
          header: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            "date": "2020-05-22",
            "time": "4.30 PM"
          })
      });
      console.log(result)
    } catch(e){
      console.log(e)
    }
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
