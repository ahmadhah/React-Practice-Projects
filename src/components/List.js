import React from 'react'
import './style.css'
function List(props) {

    const { persons } = props

    return (

        <div className="container">
            {
                persons.map((person) => (
                    <div className="card text-white bg-primary mb-3" key={person.id} style={{ maxWidth: '18rem' }}>
                        <div className="card-header"><img src={person.image} alt={person.name} /></div>
                        <div className="card-body">
                            <h5 className="card-title">{person.name}</h5>
                            <p className="card-text">Age : {person.age}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}


export default List
