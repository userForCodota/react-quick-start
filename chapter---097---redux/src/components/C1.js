import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const C1 = () => {
    const sum = useSelector((state) => state.sum);
    const dispatch = useDispatch();

    return (
        <div style={{ marginBottom: '10px', border: '1px solid #ddd', padding: '10px' }}>
            <h3>Component C1</h3>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>加1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>减1</button>
            <p>总和 = {sum}</p>
        </div>
    );
};

export default C1;