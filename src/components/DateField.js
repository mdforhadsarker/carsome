import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from 'date-fns';
import '../App.css';
import moment from 'moment-timezone'



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
      console.log(json)
    })
  
  }

  state = {
    startDate: new Date()
  };
  handleChange = date => {

    this.setState({
      startDate: date
    });

    date=moment(date).tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD")
    const {onDateSelected}=this.props
    onDateSelected(date)
   
  };


render(){
  moment.tz.setDefault('Asia/Kuala_Lumpur');
  return (
    <div className="dateandtime-picker-box">
      <DatePicker
        autoFocus={false}
        placeholderText="Date"
        className="react-datepicker-wrapper"
        selected={this.state.startDate}
        onChange={this.handleChange}
        dateFormat='yyyy-MM-dd'
        minDate={new Date()}
        filterDate={date => {



          date=moment(date).tz("Asia/Kuala_Lumpur").format("YYYY-MM-DD")
          return !this.state.dates.includes(date)
          // let flag=false
          // this.state.dates.forEach((ddate)=>{
          //   let prev=new Date(ddate)
          //   prev.setDate(prev.getDate()-1)
          //   flag=flag || date.toJSON().slice(0,10) === prev.toJSON().slice(0,10)
          // })
          // return !flag

        }}     
        isClearable
        maxDate={addDays(new Date(), 21)}

      >
     
      </DatePicker>
  </div>
  )

}
  
        

}
export default DateField