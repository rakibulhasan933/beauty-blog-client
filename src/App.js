import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Login from './Pages/Login/Login';
import Settings from './Pages/Settings/Settings';
import Write from './Pages/Write/Write';
import SinglePost from './Pages/SinglePost/SinglePost';
import Footer from './components/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Posts from './Pages/Posts/Posts';
import BlogMain from './Pages/BlogMain/BlogMain';
import HomeMain from './Pages/HomeMain/HomeMain';



const App = () => {
    return (
        <div>
            <TopBer />
            <Routes>
                <Route path='/' element={<HomeMain />} />
                <Route path='login' element={<Login />} />
                <Route path='/blogs' element={<BlogMain />}>
                    <Route index element={<Posts />} />
                    <Route path=':id' element={<SinglePost />} />
                    <Route path='settings' element={<Settings />} />
                </Route>
                <Route path='/write' element={<Write />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;