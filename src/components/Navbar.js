import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Navba() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink exact to="/" className="nav-link" >Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/speakers" className="nav-link" href="#">Speakers</NavLink>
                        </li>

                    </ul>
                    
                </div>
            </nav>
        </div>
    )
}

export default Navba
