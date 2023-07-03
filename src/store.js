import mixreducer from "./redux/reducer/main";
import { createStore } from 'redux'


const store = createStore(mixreducer)

export default store;
