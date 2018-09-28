import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import burgerReducer from "./store/reducers/burger";
import orderReducer from "./store/reducers/order"
import thunk from "redux-thunk"


const reducer = combineReducers({
    burger: burgerReducer,
    order: orderReducer
})
const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>

), document.getElementById('root'));
registerServiceWorker();
