import React from 'react'

const allStudent = ({data, deleteHandler,index,updateHandler}) => {
   
    return (

        <tr>
            <td>{index+1}</td>
            <td>{data.name}</td>
            <td>{data.roll}</td>
            <td>{data.batch}</td>
            <td>{data.class}</td>
            <td> <button onClick={deleteHandler}> Delete </button></td>
            <td> <button onClick={updateHandler}> Update </button></td>

        </tr>
    )
}

export default allStudent