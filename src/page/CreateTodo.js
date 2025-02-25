import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext';
import { useNavigate } from 'react-router-dom';

export default function CreateTodo() {
    const [formData, setFormData] = useState({title:"", status:""});
    const {todos, setTodos} = useContext(TodoContext);
    const navigate = useNavigate();
    const handleChange = (event) => { 
        const {name, value} = event.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, formData]);
        navigate('/todo');
    }
    return (
        <>
            <div className="form-container">
                <h2>Create a New Todo</h2>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" placeholder="Enter todo title..." onChange={handleChange} required />
                        <label for="title">Status</label>
                    </div>
                    <div className="form-group">
                        <select name="status" id="status" className="custom-select" onChange={handleChange} required>
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
