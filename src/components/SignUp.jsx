
import React, { useState } from 'react';
import api from "../services/api";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await api.post('/auth', {
                user: { email, password }
            });
    
            console.log('Registration successful:', response.data);
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error('Validation errors:', error.response.data);
            } else {
                console.error('Registration failed:', error);
            }
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <label>Password:</label>
            <input
                type="password"
                value={password}
                placeholder='8 Character Minimum'
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default SignUp;
