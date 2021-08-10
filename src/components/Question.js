import React, { useState } from 'react';
import './style.css'

function Question({question}) {
    const [show, setshow] = useState(false);

    console.log(question);
    return (
        <div className="list">  
            <h4 className="question">{
                question.title
            } </h4><button onClick={()=>setshow(!show)}> {show?'-':'+'}</button>
           {show?<p>{question.info}</p>:''} 
        </div>
    )
}

export default Question
