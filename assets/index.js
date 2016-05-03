import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'

function configureStore(initialState = {}) {

  if (localStorage.token) {
    initialState.user = {
      token: localStorage.token
    }
  }
  const logger = createLogger({
    collapsed: true
  });

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(
        thunkMiddleware,
        routerMiddleware(browserHistory),
        logger
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f)

  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import { fetchAuthentication } from './modules/auth/actions/loginActions'
import { fetchTournaments } from './modules/tournament/actions/tournamentActions'

const actions = bindActionCreators({ fetchAuthentication, fetchTournaments }, store.dispatch);

actions.fetchAuthentication()
  .then(() => {

  });

function requireAuth(nextState, replace) {
  if (!store.getState().user.token) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

import App from './modules/core/components/App';
import TournamentListContainer from './modules/tournament/TournamentListContainer';
import rootReducer from './reducers';
import LoginContainer from './modules/auth/LoginContainer';

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={TournamentListContainer} onEnter={actions.fetchTournaments} />
        <Route path="/home" component={TournamentListContainer} onEnter={actions.fetchTournaments}/>
      </Route>
      <Route path="/login" component={LoginContainer} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
