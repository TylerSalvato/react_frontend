import { useState } from 'react';


function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {

        const response = await fetch('/api/auth/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });


        if (response.ok) {

            onSignIn(true);
        } else {

        }
    };

    return (
        <div>
            
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

            
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;
