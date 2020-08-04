import React, {useState} from 'react';

import Tweet from '../src/Tweet'
import { render } from '@testing-library/react';

function App(){

  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () =>{
    setCount(count + 1);
    setRed(!isRed); //everytime you activate the increment function, you set the isRed to its opposite
  }


return(

  <div className="app"> 
  
    <Tweet name="Bruno" message="this is a tweet by Brunp"/>
    <Tweet name="Lev"  message="this is a tweet by Lev"/>
    <Tweet name="Farron"  message="this is a tweet by Farron"/>
    <Tweet name="Acollat"  message="this is a tweet by Acollat"/>
   
  </div>

  
);


}

export default App