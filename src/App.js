import React from 'react';
import './App.css';
import TopBer from './components/TopBer/TopBer';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';


const App = () => {
    return (
        <div>
            <TopBer />
            <Write />
        </div>
    );
};

export default App;