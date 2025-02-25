import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layouts/Layout'
import Todo from './page/Todo'
import CreateTodo from './page/CreateTodo'
import EditTodo from './page/EditTodo'
import Notes from './page/Notes'
import CreateNotes from './page/CreateNotes'

export default function Router() {
  return (
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Layout/>}>
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
