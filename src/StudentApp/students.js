import React from 'react'
import { data } from './data'
import {useState} from 'react'
import studentList from './studentlist'
const students = () => {
    const [student,setStudent]=useState(data)
  return (
    <div>
        <table>
        <tr>
        <th>Name</th>
        <th>Rollno</th>
        <th>Batch</th>
        <th>class</th>
        </tr>

        {
            student.map((item)=>{
                return <studentList student={item}/>
            })
        }
        </table>
    </div>
  )
}

export default students