import { useState } from 'react';


function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const response = await fetch('/auth/sign_in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                if (response.headers.get('Content-Type')?.includes('application/json')) {
                    const errorData = await response.json();
                    console.error('API Error:', errorData);
                } else {
                    const errorText = await response.text();
                    console.error('Non-JSON Error:', errorText);
                }
                // Handle error accordingly
            } else {
                // Handle success
            }
        } catch (error) {
            console.error('Unexpected Error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    
    

    return (
        <div>
            
            <input type="text" placeholder='Email Address' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

            
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;
