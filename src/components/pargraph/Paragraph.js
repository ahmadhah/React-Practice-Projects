import React from 'react'
import './style.css'
function Paragraph({data}) {
    
    return (
        <div className="Paragraph">
            {
                data.map((pargraph,i)=><p id="para" key={i}>{pargraph}</p>)
            }
            
        </div>
    )
}

export default Paragraph
