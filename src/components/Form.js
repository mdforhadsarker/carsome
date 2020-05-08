import React, { Component } from 'react'
import DateField from './DateField'
import TimeField from './TimeField'




export default class Form extends Component {
  state = {
    selectedDate: null,
    selectedTime:null
  }

  async onSubmit (e){
    try {

      let result = await fetch('http://localhost:3000/inspection',{
          method: 'POST',
          header: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            date: 'selectedDate',
            time: 'selectedTime'
          })
      });
      console.log(result)
    } catch(e){
      console.log(e)
    }
  }
  onDateSelected =(selectedDate) =>{
    this.setState({
      selectedDate: selectedDate
    })
    // console.log("FF "+ new Date(selectedDate).toJSON())
  }

  onTimeSelected =(selectedTime) =>{
    this.setState({
      selectedTime: selectedTime
    })
    console.log("FF "+ selectedTime)
  }

  render() {
    // let sqlDate=new Date(this.state.selectedDate).toJSON().slice(0,10)
    if(this.state.selectedDate !== null )
      return (
        <div>
        <DateField onDateSelected={this.onDateSelected}/>
        <TimeField onTimeSelected={this.onTimeSelected}  selectedDate={this.state.selectedDate}/>
        {this.state.selectedTime!==null &&
        <button 
          className="form-submit-button" 
          onClick ={e => this.onSubmit(e)} 
        >
          Submit
        </button>
        }
        </div>
        
      );
    else
      return (
        <div>
        <DateField onDateSelected={this.onDateSelected}/>
        {/* <TimeField />
        <button 
          className="form-submit-button" 
          onClick ={e => this.onSubmit(e)} 
        >
          Submit
        </button> */}
        </div>
        
    );
    
  }
}
