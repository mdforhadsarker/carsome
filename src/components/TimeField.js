import React, { Component } from 'react'
import Select from 'react-select'
import '../App.css';


export default class TimeField extends Component {
    constructor(props){
        super(props);
        this.state = {
          times: [],
          
        }
      }
      componentDidMount(){
        const {selectedDate}=this.props
        console.log("Time ++ "+selectedDate)
        fetch('http://localhost:3000/available-slots/'+selectedDate)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          this.setState({
            times: json.map((time,index)=>{
              return {label:time,value:index}
            }),
          })
          console.log(this.state.times)
        })
      }
      
      state = {
        selectedTime: new Date()
    
      };
     
      handleChange = selectedTime => {
        this.setState({ selectedTime });
        this.props.onTimeSelected(selectedTime)
        console.log(`Option selected:`, selectedTime)
      };
   
    render() {
      const { selectedTime } = this.state;
          return (
            <div>
            <Select 
            
              isSearchable={false}
              value={selectedTime}
              onChange={this.handleChange}
              options={this.state.times}
              placeholder="Time"
              >
              
            </Select>
            </div>

          )
    }
}
