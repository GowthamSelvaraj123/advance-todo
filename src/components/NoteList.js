import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import NoteContext from '../context/NoteContext'

export default function NoteList() {
  const {notes, setNotes}  = useContext(NoteContext);
  const handleDelete = (id) => 
  {
    setNotes((prev) => prev.filter((item, index) => index === id));
  }
  console.log(notes);
  return (
    <>
    <Link className="btn" to="createnote">Create Note</Link>
    {notes && notes.length > 0 ? notes.map((item, index) => (<div className="notes-container" key={index}>
      <div className="note-item">
      <div className="note-header"><Link to="edit" className="edit-icon" style={{marginBottom:"0px", marginRight:"10px"}}>✏️</Link>
        <a href="#"  className="delete-icon" onClick={(index) => handleDelete(index)}>❌</a>
        </div>
        <div className="note-content">{item}</div>
      </div>
        </div>))  :   <div className="empty-message">Data is empty</div>}
    </>
  )
}
