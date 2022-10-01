import instagramInfoReducer from "./InstagramInfo";
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    instagramInfoList: instagramInfoReducer
});

export default allReducers;
