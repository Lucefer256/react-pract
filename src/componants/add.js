
import React, { useState } from 'react';
export default function Add()

{
const [z,setz]=useState(0)
const [x, setx] = useState(0);
const [y, sety] = useState(0);
function fun()
{  

   setz(x+y);
}
    return(
    <div>
        <div>{z}</div>
        <input type="text" onChange={(e)=>{ setx(parseInt(e.target.value))}}/>
        <input type="text" onChange={(e)=>{ sety(parseInt(e.target.value))}}/>
        <button onClick={fun}>add</button>
    </div>
    )
}