import React from 'react';
import C1 from './C1';
import C2 from './C2';

const C = () => {
    return (
        <div style={{marginBottom: '20px', border: '1px solid #ccc', padding: '10px'}}>
            <h2>Component C</h2>
            <C1/>
            <C2/>
        </div>
    );
};

export default C;