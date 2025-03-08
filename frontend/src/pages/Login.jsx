import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const Login = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        setError(null);

        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', {
                email,
                password,
            });

            if (res.data.success) {
                console.log("Login successful:", res.data);
                localStorage.setItem('token', res.data.token); 
                setIsLoggedIn(true);
                navigate('/'); 
            } else {
                setError(res.data.message || 'Login failed, please try again.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Error during login. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
            </button>
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
        </div>
    );
};

export default Login;
