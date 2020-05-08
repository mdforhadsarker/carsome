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
      let stream=JSON.stringify({
            date: this.state.selectedDate,
            time: this.state.selectedTime
          })
      // let headers=new Headers()
      // headers.append("Content-Type", "application/json")
      // headers.append("Content-Length",Buffer.byteLength(stream, 'utf-8'))    

      // console.log(stream.length.toString()+" "+Buffer.byteLength(stream, 'utf-8'))
      // console.log("XXXX "+this.state.selectedDate+" , "+this.state.selectedTime)


      let result = await fetch('http://localhost:3000/inspection',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: stream
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
      selectedTime: selectedTime.label
    })
    console.log("FF "+ selectedTime.label)
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
