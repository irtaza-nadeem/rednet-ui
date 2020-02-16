import { createStore } from 'redux';
import { rootReducer } from './reducer';

const STORE_INITIAL_STATE = {
    donors: [],
    donor: []
};

export const store = createStore(rootReducer, STORE_INITIAL_STATE)