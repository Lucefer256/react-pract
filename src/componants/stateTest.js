import react from "react";
import React, { useState } from 'react';

export default function StateTest() {
    const [x, setx] = useState("");
    const [y, sety] = useState("");
    function fun()
    {  
       sety(x);
    }
    return(
        
        <div>
            <div>{y}</div>
            <input type="text" onChange={(e)=>{ setx(e.target.value)}}/>
            <button onClick={fun}>click</button>
        </div>
        
    )
   
}
