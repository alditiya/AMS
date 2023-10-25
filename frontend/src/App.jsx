/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Table from './components/Table'

function App() {

  const [todos, setTodos] = useState('')
  const [isLoading, setisLoading] = useState(true)

  useEffect( () => {
    fetchData()
    console.log(todos);
  }, [])

  const fetchData = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8000/api/todo/")
        setTodos(response.data)
        setisLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div data-theme="emerald" className='px-8 min-h-screen'>
      <nav className='pt-8'>
        <h1 className='text-5xl text-center pb-12'>Assets Management</h1>
      </nav>
      
      <Table
      todos = {todos}
      setTodos = {setTodos}
      isLoading = {isLoading}
      />
    </div>

  )
}

export default App
