import { combineReducers } from "redux";
import { chargeReducer } from './chargeReducer';
import { layoutReducer} from './layoutReducer';

export default combineReducers({ chargeReducer, layoutReducer })