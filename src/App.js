import React from 'react';
import './App.css';

function App() {
  const [count , setCount] = React.useState(0)
  function increment(){
     setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }
  return (
    <div className="App">
     <button className = "counter--minus" onClick={decrement}> - </button>
     <div className='Counter-count'>
      <h1>{count}</h1>
     </div>
     <button className = "counter--plus" onClick={increment}> + </button>
    </div>
  );
}

export default App;
