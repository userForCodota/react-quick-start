import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

const A = () => {
    const sum = useSelector((state) => state.sum); // 从 Redux 获取总和
    const dispatch = useDispatch(); // 用于派发动作

    return (
        <div style={{marginBottom: '20px', border: '1px solid #ccc', padding: '10px'}}>
            <h2>Component A</h2>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>加1</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>减1</button>
            <p>总和 = {sum}</p>
        </div>
    );
};

export default A;