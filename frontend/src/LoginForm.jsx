/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Axios } from "axios";
import { useHistory } from "react-router-dom";

const LoginFrom = () => {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const handleLogin = async () => {
        try {
            const response = await Axios.post("/api/login", { username, password });
            console.log(response.data);
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <h1>Login</h1>
            <input type="text" value={username} placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginFrom;