import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
     return localStorage.getItem('loggedInUser') ? children : <Navigate to="/login" />;
};

export default ProtectedRoute
