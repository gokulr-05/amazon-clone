import {
    createStore, combineReducers,
    applyMiddleware, compose
} from 'redux';
import thunk from 'redux-thunk';

import teamReducer from './reducers/teamReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        teams: teamReducer
    }),
    {},
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;
