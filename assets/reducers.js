import { combineReducers } from 'redux';
import user from './modules/auth/reducers/userReducer';
import { routerReducer } from 'react-router-redux'
import { tournaments } from './modules/tournament/reducers/tournamentReducer'

const entities = combineReducers({ tournaments });

const u = combineReducers({ routing: routerReducer, entities, user });

export default u;
