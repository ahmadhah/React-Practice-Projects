import React from 'react'
import './style.css'
function Card({ item }) {
    return (
        <div>

            <div className="card">
                <img className="card-img-top" src={item.img} alt="Card image cap" />
                <h5 className="card-title">{item.title}</h5><span className="badge badge-warning">${item.price}</span>
                <div className="card-body">
                    <p className="card-text">{item.desc}</p>
                </div>
            </div>

        </div>
    )
}

export default Card
