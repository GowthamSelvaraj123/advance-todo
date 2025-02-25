import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TodoContext from '../context/TodoContext'

export default function TodoList() {
  const {todos, setTodos} = useContext(TodoContext);
  const handleClick = (id) => {
    setTodos((prev) => prev.filter((item, index) => index !== id));
  }
  return (
    <>
    <Link className="btn" to="createtodo">Create Todo</Link>
      <table>
        <thead>
          <tr>
            <td>S.no</td>
            <td>Title</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {todos.map((item, index) => (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.title}</td>
          <td>{item.status == 'open' ?  "🔴" : "🟢"}</td>
          <td>
            <Link className="btn" style={{marginBottom:"0px", marginRight:"10px"}} to={`edittodo/${index}`}>Edit</Link>
            <button className="btn-danger" style={{marginBottom:"0px"}} onClick={() => handleClick(index)}>Delete</button>
          </td>
        </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
