import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App1 from './containers/baby-name';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App1 />
        
    </Provider>
    , document.querySelector('.container'));