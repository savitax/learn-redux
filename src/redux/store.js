import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import testReducer from './testReducer.js';
const rootReducer = combineReducers({
    // 这里可以添加多个reducer
    testReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;