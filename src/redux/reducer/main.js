import { combineReducers } from 'redux';
import BrownieReducer from './brownieReducer';
import ButterscotchReducer from './butterscotchReducer';
import StawberryReducer from './strawberryReducer';
import PineappleReducer from './pineappleReducer';

const mixreducer= combineReducers({
    BrownieReducer,
    ButterscotchReducer,
    StawberryReducer,
    PineappleReducer
})

export default mixreducer;