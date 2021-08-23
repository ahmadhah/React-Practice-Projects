import React, { useState } from 'react';
import firebase from '../util/firebase'

function Form() {

    const [title, settitle] = useState('');

    const createTodo = ()=>{
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            complete:false
        }
        todoRef.push(todo);
        settitle('')
    }

    return (
        <div>
            <input onChange={(e) => settitle(e.target.value)} value={title} type="text" />
            <button onClick={createTodo}>Add Todo</button>
        </div>
    )
}

export default Form
