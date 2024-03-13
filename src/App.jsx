import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';
import Login from './pages/Login';
import Index from './pages/Index/Index';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} >
                    <Route path='home' element={<Home />} />
                    <Route path="user" element={<User />} />
                </Route>
                <Route path="login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
