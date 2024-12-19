import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const C2 = () => {
    const sum = useSelector((state) => state.sum);
    const dispatch = useDispatch();

    return (
        <div style={{marginBottom: '10px', border: '1px solid #ddd', padding: '10px'}}>
            <h3>Component C2</h3>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>加1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>减1</button>
            <p>总和 = {sum}</p>
        </div>
    );
};

export default C2;