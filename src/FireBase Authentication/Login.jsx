import React, { useState } from 'react';
import { auth } from './Firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const credential = await signInWithEmailAndPassword(auth, email, password);
            const user = credential.user;
            console.log(user);
            onLogin(); // Call onLogin here
            navigate("/home");
        } 
        catch (error) {
            console.log(error);
            alert('Email and password are incorrect');
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Login Here</h1>
                <input
                    type="email"
                    placeholder='Enter your email'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='Enter your password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br />
                <br />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;
