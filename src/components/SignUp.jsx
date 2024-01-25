
import React, { useState } from 'react';
import axios from 'axios';

function SignUp () {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            
            await axios.post('/users', { user: { email, password } });
            
        } catch (error) {
            
            console.error('Registration failed:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
