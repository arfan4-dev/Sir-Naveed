import React from 'react'
const studentlist = (props) => {
      return (
    <div>   
    
        <tr>
            <td>{props.student.name}</td>
            <td>{props.student.Rollno}</td>
            <td>{props.student.Batch}</td>
            <td>{props.student.class}</td>
        </tr>   
            
    </div>
  )
}

export default studentlist