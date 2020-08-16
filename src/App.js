import React from 'react';
import './App.css';

function App() {
  fetch('http://localhost:8080/api/auth/signup', {
    method: 'post',
    headers:  { 'Content-Type' : 'application/json' },
    body: JSON.stringify({
      "email": "test@gmail.com",
      "password":"12345"
    })
  }).then(resp => console.log(resp.json()))
  .catch(error => console.log(error));

  return (
    <div className="App">
      THIS IS A TEST :)
    </div>
  );
}

export default App;
