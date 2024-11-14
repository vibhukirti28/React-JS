import React, { useState } from 'react'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

const RunEmail = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogin = () => {
    setIsAuthenticated(true); // Update authentication state to true
    };

    const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
    };

    return (
    <div>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
        <Route path='/home' element={<PrivateRoute element={<Home />} />} />
        </Routes>
        </BrowserRouter>
    </div>
    );
}

export default RunEmail;
