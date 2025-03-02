import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import UserManagement from './components/UserManagement';
import MailManagement from './components/MailManagement';

const App = () => {
    const isAuthenticated = !!localStorage.getItem('token'); // 检查是否已登录

    return (
        <Router>
            <Routes>
                <Route path="/" element={isAuthenticated ? <Navigate to="/home" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} >
                    <Route path="user-management" element={isAuthenticated ? <UserManagement /> : <Navigate to="/login" />} />
                    <Route path="mail-management" element={isAuthenticated ? <MailManagement /> : <Navigate to="/login" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
