/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import Table from '../components/Table'

function Dashboard() {
    const navigate = useNavigate();
    const [user, setUser] = useState({})

    useEffect(() => {
        getUser()
    }, [navigate])

    const getUser = () => {
        axios.get('http://127.0.0.1:8000/whoami/')
            .then((r) => {
                setUser(r.data)
            })
            .catch((e) => {
                console.log(e)
            });
    }

    const logoutAction = () => {
        axios.post('http://localhost:8000/logout/')
            .then((r) => {
                navigate("/");
            })
            .catch((e) => {
                console.log(e)
            });
    }

    return (
        <Layout>
            <div className="row justify-content-md-center">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#">Dashboard</a>
                            <div className="d-flex">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a onClick={() => logoutAction()} className="nav-link " aria-current="page" href="/">Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <h2 className="text-center mt-5">Welcome, {user.username}!</h2  >
                </div>
            </div>
            <Table />
        </Layout>
    );
}

export default Dashboard;