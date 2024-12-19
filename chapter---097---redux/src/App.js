import React from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

const App = () => {
    return (
        <div style={{padding: '20px'}}>
            <h1>Redux Demo</h1>
            <A/>
            <B/>
            <C/>
        </div>
    );
};

export default App;