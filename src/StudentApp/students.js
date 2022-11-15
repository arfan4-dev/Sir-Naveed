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
  const [flag,setFlag]=useState(false)
  const [UpdateIndex,setIndex]=useState(0)
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
      const filterStudent=students.filter((student,i)=>{
          if(i !==index){
            return student                    
          }
      })
     
      // console.log(index)
      setStudents([...filterStudent])
  }
  const updateHandler=(student,index)=>{
    // console.log(student)
    setIndex(index)
setName(student.name)
      setRoll(student.roll)
      setBatch(student.batch)
      setClass(student.class)
      setFlag(true)
  }

  const ctaUpdateHandler=(index)=>{
    if (name != "" && roll != "" && batch != "" && stuClass != "") {
      var NewStudent = {
        name,
        roll,
        batch,
        class: stuClass,
      }


      let updateStudent = students.map((stu,i)=>{
        if(UpdateIndex==i){
          return NewStudent
        }

        else{
          return stu
        }
      })
      setStudents([...updateStudent])
      setName("")
      setRoll("")
      setBatch("")
      setClass("")
      setFlag(false)
    }
    else {
      setErrorMessage("Error occure, Please fill all blanks")
    }
  }
  return (
    <div>             
      <h1> Add Students </h1>
      <input type="text" value={name} placeholder="Enter your name" onChange={(e) => { setName(e.target.value) }} />
      <input type="text" value={roll} placeholder="Enter your Rollno" onChange={(e) => { setRoll(e.target.value) }} />
      <input type="text" value={batch} placeholder="Enter your Batch" onChange={(e) => { setBatch(e.target.value) }} />
      <input type="text" value={stuClass} placeholder="Enter your Class" onChange={(e) => { setClass(e.target.value) }} />
    {
      flag?<button onClick={ctaUpdateHandler}>Update</button>:
      <button onClick={AddHanlder}>Add</button>
    }
      
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
            return <StuAll data={item} index={index} 
            deleteHandler={()=>deleteHandler(index)} updateHandler={updateHandler} />
          })
        }
      </table>
    </div>
  )
}

export default StudentList