import React, { Component } from 'react'
import Select from 'react-select'

const options = [
    {label: '4:30 PM', value:'0'},
    {label: '5:00 PM', value:'1'},
    {label: '5:30 PM', value:'2'}
  
  ];

export default class TimeField extends Component {
    state = {
        selectedOption: null,
      };
      handleChange = selectedOption => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
      };
    componentDidMount() {
        fetch(`http://localhost:3000/inspection`)
        .then(response => response.json())
        .then(times => this.setState({times:times}))
    }
    render() {
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
