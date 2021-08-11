import './style.css'
import React, { useState } from 'react';

function Form({ setindex, length }) {
    const [number, setnumber] = useState(0);
    const [error, seterror] = useState(false);
    function formHandler(e) {
        e.preventDefault();
        const numb = parseInt(number)
        if (numb > -1 && numb < length) {
            setindex(numb)
            seterror(false)
        } else seterror(true)
    }


    return (
        <div>
            <form onSubmit={formHandler}>
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Enter a Number</span>
                    <input value={number} onChange={(e) => (
                        setnumber(e.target.value))
                    } type="number" className={`input form-control ${error ? "error" : ''}`} />
                    <button type="button" className={`btn btn-outline-dark `} onClick={formHandler}>Generate</button>
                </div>
                {error ? <p className="parag">Please enter a number between 1 and {length}</p> : ''}
            </form>
        </div>
    )
}

export default Form
