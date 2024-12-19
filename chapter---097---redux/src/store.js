import {createStore} from 'redux';

// 定义初始状态
const initialState = {
    sum: 0, // 总和
};

// 定义 Reducer
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, sum: state.sum + 1};
        case 'DECREMENT':
            return {...state, sum: state.sum - 1};
        default:
            return state;
    }
};

// 创建 Store
const store = createStore(counterReducer);

export default store;