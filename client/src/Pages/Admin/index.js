import React, { useState } from 'react'
import './Admin.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Admin() {

    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [message, setMessage]= useState('')
    const [admin, setAdmin] = useState({
        adminId:'',
        password:''
    })

    const onChangeHandler = e => {
        const {name, value} = e.target
        setAdmin({
            ...admin,
            [name]:value
        })
    }

    
    const submitHandler = (e) => {
        e.preventDefault()

        axios.post("/api/login", admin)
            .then(res=>{alert(res.data.message)
                // setMessage(res.data)
                navigate('/home')
            }) 
    }
    return (
        <div className='admin-container'>
            <div className="login-box">
                <h2>Login</h2>
                <form autoComplete='off' onSubmit={submitHandler}>
                    <div className="user-box">
                        <input
                            type="text"
                            name="adminId"
                            value={admin.adminId}
                            onChange={onChangeHandler}
                            required />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input
                            type="password"
                            name="password"
                            value={admin.password}
                            onChange={onChangeHandler}
                            required />
                        <label>Password</label>
                    </div>
                    <button className='login-button'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
