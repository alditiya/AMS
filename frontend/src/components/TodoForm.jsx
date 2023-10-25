/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const TodoForm = () => {

    const [newTodo, setNewTodo] = useState({
        'body': ''
    })

    const handleChange = (e) => {
        setNewTodo(prev => ({
            ...prev,
            'body': e.target.value
        }))
        console.log(newTodo);
    }


    return (
        <div>
            <input type='text' placeholder='Type Here' className='input input-bordered input-info w-full max-w-xs' 
            onChange={handleChange} value={newTodo.body} />
            <button className='btn btn-primary ml-2'>Button</button>
        </div>
    )
}

export default TodoForm