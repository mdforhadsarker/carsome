import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import '../App.css';



class  DateField  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dates: [],
      
    }
  }
  componentDidMount(){
    fetch('http://localhost:3000/disabled-dates')
    .then(res => res.json())
    .then(json => {
      this.setState({
        dates: json,
      })
    })
  
  }

  state = {
    startDate: new Date()
  };
  handleChange = date => {
    this.setState({
      startDate: date
    });
   
  };
 

render(){
 
  return (
    <div>
      <DatePicker
        autoFocus={false}
        placeholderText="Date"
        className="date-picker"
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat='yyyy-MM-dd'
        minDate={new Date()}
        filterDate={date => date.getDay() !== 7 && date.getDay() !== 0}     
        isClearable
        maxDate={addDays(new Date(), 21)}

      >
     
      </DatePicker>
  </div>
  )

}
  
        

}
export default DateField