import { useState } from 'react';
import api from '../services/api';
import getCSRFToken from '../components/cookies';


function SignIn({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);

    const handleSignIn = async () => {
        setLoading(true);
        try {
            const response = await api.post(
                '/auth/sign_in',
                { email, password },
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCSRFToken(document.cookie)
                  },
                }
                
              );
              
    
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
