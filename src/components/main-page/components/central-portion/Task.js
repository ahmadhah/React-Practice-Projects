import React, { useState } from 'react';
import styled from 'styled-components'

function Task({ task }) {

    const [checked, setchecked] = useState(false);

    return (
        <Taskk>
            <input type="checkbox" onChange={() => { setchecked(!checked); }} name="my-checkbox" />
            <Text checked={checked} >{task}</Text>
        </Taskk>
    )
}

export default Task


const Taskk = styled.div`
    height:7%;
    width: 100%;
    display: flex;
    align-items: center;
    
    margin:10px 0;
    background-color: #ebe4e1;
    
    input{
        height: 15px;
        width: 15px;
        margin: 0 10px;
    }
    input[type="checkbox"]:checked {
        box-shadow: 0 0 0 2px hotpink;
      }
`
const Text = styled.p`
margin:0 10px;
font-size: 18px;
text-decoration: ${props => props.checked ? 'line-through' : 'none'};

`