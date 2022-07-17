import React from 'react';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Login from './Pages/Login/Login';
import Settings from './Pages/Settings/Settings';



const App = () => {
    return (
        <div>
            <TopBer />
            <Login />
        </div>
    );
};

export default App;