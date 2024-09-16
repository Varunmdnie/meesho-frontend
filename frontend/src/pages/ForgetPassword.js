

// ForgotPassword.js
import React, { useState } from 'react';
import ProfileNav from '../components/ProfileNav';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/users/forgetPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            setMessage(data.message);
            navigate('/resetPassword')
            
        } catch (error) {
            setMessage('Something went wrong, please try again.');
        }
    };

    return (
        <>
        <ProfileNav/>
        <div className="container d-flex justify-content-center mt-5 min-vh-50">
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="card-title text-center">Forgot Password</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="form-control"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            Send Password Reset Link
                        </button>
                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default ForgetPassword;
