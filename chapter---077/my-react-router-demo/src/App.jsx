import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link, useSearchParams} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user/1?name=John">User (Dynamic Route)</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/user/:id" element={<User/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
    );
};

export default App;