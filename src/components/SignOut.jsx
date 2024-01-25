

function SignOut({ onSignOut }) {
    const handleSignOut = async () => {

        const response = await fetch('/api/auth/sign_out', {
            method: 'DELETE',
        });


        if (response.ok) {

            onSignOut();
        } else {

        }
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
}

export default SignOut;
