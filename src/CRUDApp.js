import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UsersList from './UsersList'
import CreateUser from './CreateUser'

function CRUDApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/create' element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  )
}

export default CRUDApp

// CRUD         --> Create Read Update  Delete

// HTTP methods -->  POST   GET   PUT    DELETE
