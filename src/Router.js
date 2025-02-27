import React, { useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Todo from './page/Todo'
import CreateTodo from './page/CreateTodo'
import EditTodo from './page/EditTodo'
import Notes from './page/Notes'
import CreateNotes from './page/CreateNotes'
import Dashboard from './page/Dashboard'
import Login from './page/Login'
import { UserContext } from './context/UserContext'
import Register from './page/Register'
export default function Router() {
    const {users}= useContext(UserContext);
    console.log(users);
  return ( 
    <BrowserRouter>
       <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/" element={<Layout /> }>
                <Route index element={users ? <Dashboard /> : <Navigate to="/login" />}></Route>
                <Route path="todo" element={<Todo/>}></Route>
                <Route path="todo/createtodo" element={<CreateTodo></CreateTodo>}></Route>
                <Route path="todo/edittodo/:id" element={<EditTodo></EditTodo>}></Route>
                <Route path="notes" element={<Notes></Notes>}></Route>
                <Route path="notes/createnote" element={<CreateNotes />}></Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Route>
       </Routes>
    </BrowserRouter>
  )
}
