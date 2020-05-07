import React, { Component } from 'react'
// import Select from 'react-select'
import DatePicker from 'react-date-picker';
// import "react-datepicker/dist/react-datepicker.css";
import 'react-date-picker/dist/entry.nostyle';


export default class DateField extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  
    render() {
        return (
          <div>
            <DatePicker
            onChange={this.onChange}
            value={this.state.date}
            dayPlaceholder={"Date"}

        />
            {/* <Select 
              isSearchable={false}
              placeholder={'Date'}
            >
            </Select> */}
        </div>
        )
    }
}
