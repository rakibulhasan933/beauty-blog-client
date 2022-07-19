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
import HomeMain from './Pages/HomeMain/HomeMain';
import Footer from './components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Posts from './Pages/Posts/Posts';



const App = () => {
    return (
        <div>
            <TopBer />
            <Routes>
                <Route path='/' element={<HomeMain />}>
                    <Route index element={<Home />} />
                    <Route path='login' element={<Login />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path='/write' element={<Write />} />
                <Route path='/posts' element={<Posts />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;