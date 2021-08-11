import React from 'react'

function Details({ object }) {

    return (
        <div>
            <h3>{object.title}</h3>
            <span className="badge bg-secondary">{object.company}</span>
            <p>{object.dates}</p>
            {object.duties.map((list, i) =>
                <li key={i}>{list}</li>
            )}
        </div>

    )
}

export default Details
