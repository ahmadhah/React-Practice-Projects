import React, { useState, useEffect } from 'react'
import firebase from '../util/firebase'
import Todo from './Todo'

const TodoList = () => {

    const [todoList, settodoList] = useState();

    useEffect(() => {
        const todoRef = firebase.database().ref('Todo')
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val()
            const todoList = []
            for (let id in todos) {
                todoList.push({id, ...todos[id]})
            }
            settodoList(todoList)
        })
    }, []);

    return (
        <div>
            {todoList && todoList.map((todo, i) => <Todo todo={todo} key={i} />)}
        </div>
    )
}

export default TodoList
