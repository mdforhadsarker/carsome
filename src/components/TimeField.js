import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    {label: '4:30 PM', value:'0'},
    {label: '5:00 PM', value:'1'},
    {label: '5:30 PM', value:''}
  
  ];

export default class TimeField extends Component {
    constructor(props){
        super(props);
        this.state = {
          times: [],
          
        }
      }
      componentDidMount(){
        fetch('http://localhost:3000/available-slots/2020-05-11')
        .then(res => res.json())
        .then(json => {
          this.setState({
            times: json,
          })
        })
      }
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
   
    render() {
        console.log(this.times)
        const { selectedOption } = this.state;
          return (
            <div style={{marginTop: 20}}>
            <Select 
                isSearchable={false} 
                placeholder={'Time'}
                options ={options}
                value={selectedOption}
                onChange={this.handleChange}
            />
            </div>
          )
       
    }
}
