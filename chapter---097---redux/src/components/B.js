import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const B = () => {
    const sum = useSelector((state) => state.sum);
    const dispatch = useDispatch();

    return (
        <div style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
            <h2>Component B</h2>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>加1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>减1</button>
            <p>总和 = {sum}</p>
        </div>
    );
};

export default B;