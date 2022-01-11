import React, { useState } from 'react';
export default function Case() {
    const [z, setz] = useState(0)
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);
    function fun() {



        var word = x.split(" ");
        console.log(word)
        
        const count = x.match(/[aeiou]/gi).length;
        setz("word count= " + word.length+"\n"+"vowels = " + count);

    }
    return (
        <div>

            <input type="text" className="form-control " onChange={(e) => { setx(e.target.value) }} />
            <button className="btn btn-success" onClick={fun}>Show</button>
            <div>{z}</div>
        </div>
    )
}