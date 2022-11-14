import React from 'react'
import { useState } from 'react';
import { student } from "./data";
import StuAll from './studentlist'
const StudentList = () => {
  var [students, setStudents] = useState(student)
  // console.log("Student",students)
  var [errorMessage, setErrorMessage] = useState()
  const [name, setName] = useState("")
  const [roll, setRoll] = useState("")
  const [batch, setBatch] = useState("")
  const [stuClass, setClass] = useState("")
  function AddHanlder() {
    if (name != "" && roll != "" && batch != "" && stuClass != "") {
      var NewStudent = {
        name,
        roll,
        batch,
        class: stuClass,
      }


      let listofStudent = NewStudent
      setStudents([...students, listofStudent])
      setName("")
      setRoll("")
      setBatch("")
      setClass("")
    }
    else {
      setErrorMessage("Error occure, Please fill all blanks")
    }
  }
  
  const deleteHandler = (index) => {
      const filterStudent=students.filter((student,index)=>{
          if(student.index!==index){
            return student
          }
      })
  }
  return (
    <div>
      <h1> Add Students </h1>
      <input type="text" value={name} placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
      <input type="text" value={roll} placeholder="Enter your Rollno" onChange={(e) => { setRoll(e.target.value) }} />
      <input type="text" value={batch} placeholder="Enter your Batch" onChange={(e) => { setBatch(e.target.value) }} />
      <input type="text" value={stuClass} placeholder="Enter your Class" onChange={(e) => { setClass(e.target.value) }} />
      <button onClick={AddHanlder}>Add</button>
      <p style={{ backgroundColor: "red", color: "white" }}>
        <h3>{errorMessage}</h3>
      </p>

      <hr />
      <h1>List of Student</h1>
      <table>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Roll no.</th>
          <th>Batch</th>
          <th>Class</th>
        </tr>
        {
          students.map((item, index) => {
            return <StuAll data={item} index={index} deleteHandler={()=>deleteHandler(index)} />
          })
        }
      </table>
    </div>
  )
}

export default StudentList