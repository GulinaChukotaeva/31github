import React from 'react';
import './App.css';

function App() {
  const h1Styles = {
      color: "green",
      textTransform: 'uppercase',
  };
  return (
    <div className="App">
      <header className="App-header">     
       <h1 style={h1Styles}>Hello React</h1>
      </header>
    </div>


    // React.createElement(
    //   'header' , {
    //   className: 'App-header',
    // },
    // React.createElement (
    //   "h1", null, "hello world"
    // )
    // )
    //
  )
}

export default App;
