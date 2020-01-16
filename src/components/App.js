import React from 'react';
import Header from './misc/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="container-fluid">
        <div className="row">
          <div className="col">Form</div>
          <div className="col">List</div>
        </div>
      </div>
    </div>
  );
}

export default App;
