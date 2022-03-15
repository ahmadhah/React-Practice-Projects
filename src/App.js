import './App.css';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';


function App() {

  const [flag, setflag] = useState(false);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [employees, setStudents] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [updateUid, setUpdateUid] = useState(0)


  const onChangeNameHandler = (e) => {
    setFirstName(e.target.value)
  }


  const onSubmitHandler = () => {

    if (!firstName || !email || !lastName) {
      alert('All inputs are required')
    }


    let student = {
      uid: uuidv4(),
      name: firstName,
      lastName,
      email,

    }

    setStudents([...employees, student])

    setLastName('')
    setFirstName('')

    setEmail('')
    setflag(false)
  }

  const onDeleteHandler = (uid) => {

    console.log('email', uid);

    let newStudents = employees.filter((student) => student.uid !== uid)

    setStudents(newStudents)

  }

  const onUpdateHandler = (item, index) => {
    setLastName(item.lastName)
    setFirstName(item.name)

    setEmail(item.email)
    setUpdateUid(item)
    setIsUpdate(true)
    setflag(true)
  }

  const onCtaUpdate = () => {


    let student = {
      name: firstName,
      lastName,
      email,

    }


    let newStudents = employees.map((item, index) => {
      if (item.uid === updateUid) {
        return student
      }
      else {
        return item
      }
    })

    setStudents(newStudents)
    setLastName('')
    setFirstName('')
    setEmail('')
    setIsUpdate(false)
    setflag(false)

  }

  return (
    <Container>

      <Title>Employee List</Title>
      {
        flag ? <div style={{ marginLeft: '10px' }}>
          <div>Employee First Name: <Input onChange={(e) => setFirstName(e.target.value)} value={firstName} placeholder='enter your First Name' type='text' /> </div>
          <div>Employee Last Name: <Input onChange={(e) => setLastName(e.target.value)} value={lastName} placeholder='enter your Last Name' type='text' /> </div>
          <div>Email: <Input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='enter your Email' type='text' /> </div>

          {isUpdate ?
            <Button onClick={onCtaUpdate}>Update</Button> :
            <Button onClick={onSubmitHandler}>Submit</Button>
          }
        </div> : <Button onClick={() => setflag(true)}>Add Employee</Button>
      }

      <h1>List of Employees</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            employees.map((item, index) => {
              return (
                <tr key={index} >


                  <td>{item.name}</td>
                  <td>{item.lastName}</td>
                  <td>{item.email}</td>

                  <td style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Button onClick={() => onUpdateHandler(item, index)}>Update</Button>
                    <Button variant="danger" onClick={() => onDeleteHandler(item.uid)}>Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 60vh;
  max-width: 100%;
  background-color: #fff9eb;
  margin-top: 10%;
  padding: 20px;
`

const Title = styled.h1`
  text-align: center;
  color: black;
  margin-top:0;
  margin-bottom: 40px;
  `

const Input = styled.input`
margin:5px;
padding:3px;
`