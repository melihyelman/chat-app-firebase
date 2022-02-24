import { combineReducers } from 'redux';
import { reducer as firebase } from "react-redux-firebase"

const reducerRoot = combineReducers({
    firebase,
});

export default reducerRoot