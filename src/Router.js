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
import { LoginContext } from './context/LoginContext'
export default function Router() {
    const {login}= useContext(LoginContext);
    console.log(login);
  return ( 
    <BrowserRouter>
       <Routes>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="/" element={<Layout /> }>
                <Route index element={login ? <Dashboard /> : <Navigate to="/login" />}></Route>
                <Route path="todo" element={login ? <Todo/> : <Navigate to="/login" />}></Route>
                <Route path="todo/createtodo" element={login ? <CreateTodo></CreateTodo> : <Navigate to="/login" />}></Route>
                <Route path="todo/edittodo/:id" element={login ? <EditTodo></EditTodo> : <Navigate to="/login" />}></Route>
                <Route path="notes" element={login ?  <Notes></Notes> : <Navigate to="/login" />}></Route>
                <Route path="notes/createnote" element={login ?  <CreateNotes /> : <Navigate to="/login" />}></Route>
                <Route path="*" element={<h1>Not Found</h1>}></Route>
            </Route>
       </Routes>
    </BrowserRouter>
  )
}
