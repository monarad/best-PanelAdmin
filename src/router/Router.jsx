import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from '../pages/AdminPage'

function Router() {
  return (
    <BrowserRouter>
    <Routes>
       <Route index element={<AdminPage/>}/> 
    </Routes>
    </BrowserRouter>
  )
}

export default Router