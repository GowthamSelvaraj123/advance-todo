import React, { useContext, useState } from 'react'
import NoteContext from '../context/NoteContext';
import { useNavigate } from 'react-router-dom';

export default function CreateNotes() {
  const [formData, setFormData] = useState();
  const {notes, setNotes} = useContext(NoteContext);
  const navigate = useNavigate("/notes");
  const handleChange = (event) => {
    setFormData(event.target.value);
    console.log(formData);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setNotes([...notes, formData]);
    console.log(notes);
    navigate("/notes");
  }
  return (
    <>
    <div className="form-container">
    <h2>Create a New Notes</h2>
      <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
          <textarea name="notes" placeholder="Write Your Notes" onChange={handleChange}></textarea></div>
          <input type="submit" className="btn"  />
      </form>
    </div>
    </>
  )
}
