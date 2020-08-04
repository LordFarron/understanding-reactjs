import React from 'react';

function Hello(){

    const emitAlert = () => {
      alert('yes, it worked');
    }
    
    
    return(
      <div>
        <h1>Hello</h1>
        <button onClick={emitAlert}>Click</button>
      </div>
    );
  
  
  }

  export default Hello