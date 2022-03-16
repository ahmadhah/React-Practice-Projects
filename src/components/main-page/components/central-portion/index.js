import React from 'react'
import styled from 'styled-components'

function CenterContainer() {
    return (
        <Container>
            <Myday>
                <h2>My Day</h2>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <p>Sort</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z" />
                    </svg>
                    <p>Suggestions</p>
                </div>
            </Myday>
            <Addtask>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                </svg>
                <input type="text" placeholder="Add a task" />
            </Addtask>
            <Task>
                <Input type="checkbox" name="my-checkbox" />
                <label for="opt-in">Check me!</label>

            </Task>
        </Container>
    )
}

export default CenterContainer
const Container = styled.div`
height: 95%;
width: 52%;
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
const Input = styled.input``
const Task = styled.div`
    height:7%;
    width: 100%;
    display: flex;
    align-items: center;
    
    margin:10px 0;
    input{
        height: 15px;
        width: 15px;
        border-radius:50px;
        margin: 0 10px;
    }
    input[type="checkbox"]:checked {
        box-shadow: 0 0 0 3px hotpink;
      }
`