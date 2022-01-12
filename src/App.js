import React,{useState} from 'react'

import './App.css';
import Add from './Add';
import Cond from './Cond';
function App() {




const [state, setState] = useState(0)
let value=99777777;
const func=()=>{

  setState(7888999)
  value=89797998998
  console.log(value);

  //setState
}
  return (
    <div>
     
      {/** <Add />*/} 
    <Cond state={state}/>
       

       <button onClick={func}>
         In Parent
       </button>

    
    </div>
  );
}

export default App;
