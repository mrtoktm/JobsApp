import React from "react";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from './reducers';
import initialState from './store';

const FavProvider = ({children}) => {
    const store = legacy_createStore (reducers, initialState);
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
};

export default FavProvider;