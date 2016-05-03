import { combineReducers } from 'redux';
import user from './modules/auth/reducers/userReducer';
import { routerReducer } from 'react-router-redux'

//const entities = combineReducers({});

const u = combineReducers({ routing: routerReducer, /*entities,*/ user });

export default u;
