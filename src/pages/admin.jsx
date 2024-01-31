

import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const navigate = useNavigate();

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSignIn = (status) => {
        setIsAuthenticated(status);
    };

    const handleSignOut = () => {
        setIsAuthenticated(false);
    };

    const goToRegistration = () => {
        console.log("Magic");
        navigate('/register');
    };

    return (
        <div>
            {isAuthenticated ? (
                <SignOut onSignOut={handleSignOut} />
            ) : (
                <SignIn onSignIn={handleSignIn} />
            )}

            

            <button onClick={goToRegistration}>Sign Up</button>
        </div>
    );
}

export default Admin;

