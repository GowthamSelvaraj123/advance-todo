import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditTodo() {
  const {todos, setTodos} = useContext(TodoContext);
  const {id} = useParams();
  const navigate = useNavigate();
  const existingTodo = todos.find((item, index) => index == id);
  const [formData, setFormData] = useState(existingTodo || {title:"", status:"open"});
  const handleChange  = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]:value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedTodos = todos.map((todo, index) =>     
        index == id ? formData : todo
      );
    console.log(updatedTodos);
    setTodos(updatedTodos);
    navigate('/todo');
  }
  return (
    <>
        <div className="form-container">
                <h2>Create a New Todo</h2>
                <form className="todo-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" value={formData.title} placeholder="Enter todo title..." onChange={handleChange} required />
                        <label for="title">Status</label>
                    </div>
                    <div className="form-group">
                        <select name="status" id="status" className="custom-select" value={formData.status} onChange={handleChange} required>
                            <option value="open">Open</option>
                            <option value="close">Close</option>
                        </select>
                    </div>
                    <button type="submit" className="btn">Add Todo</button>
                </form>
            </div>
    </>
  )
}
