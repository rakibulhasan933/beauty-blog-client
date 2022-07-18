import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PostsMain from './Pages/PostsMain/PostsMain';
import Register from './Pages/Register/Register';
import Settings from './Pages/Settings/Settings';
import Write from './Pages/Write/Write';
import SinglePost from './components/SinglePost/SinglePost';
import Post from './components/Post/Post';
import HomeMain from './Pages/HomeMain/HomeMain';



const App = () => {
    return (
        <div>
            <TopBer />
            <Routes>
                <Route path='/' element={<HomeMain />}>
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path='/write' element={<Write />} />
            </Routes>
        </div>
    );
};

export default App;