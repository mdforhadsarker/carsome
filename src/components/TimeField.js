import React, { Component } from 'react'
import Select from 'react-select'
import '../App.css';

const options =[
  {label:'9:00 AM', value:'0'},
  {label:'9:30 AM', value:'1'},
  {label:'10:00 AM', value:'2'},
  {label:'10:30 AM', value:'3'}
  
]
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
            times: json,
          })
        })
      }
      
      state = {
        selectedTime: new Date()
    
      };
     
      handleChange = selectedTime => {
        this.setState({ selectedTime });
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
              options={options}
              placeholder="Time"
              >
              
            </Select>
            </div>

          )
    }
}
