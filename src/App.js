import React from 'react';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Settings from './Pages/Settings/Settings';
import Write from './Pages/Write/Write';


const App = () => {
    return (
        <div>
            <TopBer />
            <Settings />
        </div>
    );
};

export default App;