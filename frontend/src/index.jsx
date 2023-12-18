/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Table from "./components/Table"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route exec path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;