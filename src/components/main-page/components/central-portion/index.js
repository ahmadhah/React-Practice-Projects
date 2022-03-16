
import styled from 'styled-components'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Task from './Task'


function CenterContainer({ flag }) {
    console.log('center', flag)
    const [Name, setName] = useState('');
    const [tasks, setTasks] = useState([]);

    const submitHandler = (task) => {
        if (!Name) {
            alert('Please enter a task')
        }
        else {
            setTasks([...tasks, { id: uuidv4(), Name }]);
            setName('')
        }
    }

    return (
        <Container flag={flag}>
            <Myday>
                <h2>My Day</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" ClassName="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fillRule-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <p>Sort</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" ClassName="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                    </svg>
                    <p>Suggestions</p>
                </div>
            </Myday>
            <Addtask>
                <svg onClick={submitHandler} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fillRule="currentColor" ClassName="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fillRule-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
                <input onChange={(e) => setName(e.target.value)} value={Name} placeholder='Add a task..' type='text' />
            </Addtask>

            {
                tasks.map((task, index) => {
                    return (
                        <Task key={index} task={task.Name} index={task.id} />
                    )
                })
            }

        </Container>
    )
}

export default CenterContainer
const Container = styled.div`
height: 95%;
width: ${props => props.flag ? '52%' : '70%'};

padding:20px;
display block;
`
const Myday = styled.div`

    width: 100%;
    height: 8%;
    display: flex;
    align-items: center;
    position: relative;
    div{
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        color: grey;
        svg{
            margin:0 10px;
        }
    }
`

const Addtask = styled.div`
    background-color: orange;
    margin-top: 10px;
    height: 8%;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #F3F2F1;
    color: grey;

    svg{
        margin:0 15px;
        &:hover{
            cursor: pointer;
            background-color:skyblue;
        }
    }
    input{
        width: 70%;
        height: 30%;
        border: none;
        background-color: #F3F2F1;
        padding: 10px;
        font-size: 20px;
    }

    
`
