import { createStore } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

import usersReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit';

const makeStore = () => configureStore({
    reducer: {
        users: usersReducer
    }
});

export default createWrapper(makeStore);