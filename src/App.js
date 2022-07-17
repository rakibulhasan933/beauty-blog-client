import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import Write from './Pages/Write/Write';



const App = () => {
    return (
        <div>
            <TopBer />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/write' element={<Write />} />
            </Routes>
        </div>
    );
};

export default App;