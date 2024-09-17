// ResetPassword.js
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    let navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`http://localhost:4000/api/users/resetPassword/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const data = await response.json();
            setMessage(data.message);
            navigate('/login')

        } catch (error) {
            setMessage('Something went wrong, please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center mt-5 min-vh-50">
            <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
                <h2 className="card-title text-center">Reset Password</h2>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                placeholder="Enter new password"
                                className="form-control"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block mb-4">
                            Reset Password
                        </button>
                        {message && <p>{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
