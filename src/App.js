import React from 'react';
import './App.css';
import Form from './components/Form'
import moment from 'moment-timezone'

function App() {
  moment.tz.setDefault('Asia/Kuala_Lumpur');

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
