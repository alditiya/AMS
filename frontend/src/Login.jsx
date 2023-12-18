/* eslint-disable no-unused-vars */
// LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api-auth/login/', {
                username,
                password,
            });

            console.log(response.data);
            // Handle sukses login
        } catch (error) {
            console.error(error.response.data);
            // Handle gagal login
        }
    };

    return (
        <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default LoginForm;
