import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header>
                <img height='200px' src={process.env.PUBLIC_URL + '/img/raceing_logo_schwarz.png'} alt="Logo" />;
            </header>
        </div>
    );
}

export default App;
