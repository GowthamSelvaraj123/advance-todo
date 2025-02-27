import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TodoContext from '../context/TodoContext'

export default function TodoList() {
  const {todos, setTodos} = useContext(TodoContext);
  const [search, setTodoSearch] = useState("");
  const [filter, setTodoFilter] = useState("all");
  const [tempStore, setTempStore] = useState(todos);
  const handleClick = (id) => {
    setTodos((prev) => prev.filter((_, index) => index !== id));
  }
  const setSearch = (event) => {
    setTodoSearch(event.target.value); 
  }
  const setFilter = (event) => {
    setTodoFilter(event.target.value);
  }
  const setSortOrder = () => {}
  useEffect(() => {
    let filtered = todos;
    if (search.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )}
      if (filter !== "all") {
        filtered = filtered.filter((item) => item.status == filter);
      }
      setTempStore(filtered);
  }, [search, filter, todos]);
  return (
    <>
    <div className="custom-option-wrap" style={{ margin: "10px 0" }}>
    <Link className="btn" to="createtodo">Create Todo</Link>
        <input type="text" placeholder="Search todos..." value={search} onChange={setSearch} />
        <select value={filter} onChange={setFilter}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="close">Close</option>
        </select>
        <button onClick={() => setSortOrder()}>
          Sort
        </button>
      </div>
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
          {tempStore.map((item, index) => (
          <tr key={index}>
          <td>{index + 1}</td>
          <td>{item.title}</td>
          <td>{item.status === 'close' ? "🟢" : "🔴"}</td>
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
