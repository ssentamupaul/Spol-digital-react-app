import React from 'react';
import { useState, UseEffect} from 'react';

function Hooks() {
    const [count,setCount]=useState(0)
    return (
      <div className='hooks'>
        <h6>Use Lifecycle Hooks in Functional Component</h6>
        <button onClick={()=>{setCount(count+1)}}>click {count}</button>
      </div>
    )
  }

export default Hooks