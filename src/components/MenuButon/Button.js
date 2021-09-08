import React from 'react'
import './style.css'

export default function Button({ menu, SetCategory }) {
    return (
        <div>
            <button type="button" className="btn btn-success" onClick={() => SetCategory(menu)}>{menu}</button>
        </div>
    )
}
