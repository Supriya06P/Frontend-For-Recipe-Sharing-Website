import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';

const Signup = ({ setIsLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username || !email || !password || !confirmPassword) {
            setError('All fields are required!');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match!');
            return;
        }

        setLoading(true);
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', {
                username,
                email,
                password,
            });

            if (res.data.success) {
                localStorage.setItem('username', res.data.username);
                localStorage.setItem('auth_token', res.data.token);
                setIsLoggedIn(true);
                navigate('/');
            } else {
                setError(res.data.message || 'Signup failed, please try again.');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Error during signup. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <h2>Signup</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <button type="submit" disabled={loading}>
                    {loading ? 'Signing up...' : 'Signup'}
                </button>
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};
export default Signup;
