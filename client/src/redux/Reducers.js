import { combineReducers } from "redux"
import registerReducer from "../Components/signup/redux/reducer";
import loginReducer from "../Components/signin/redux/reducer";

const appReducer= combineReducers({
registerReducer:registerReducer,
loginReducer:loginReducer

});

const rootReducer = (state, action) =>{

    return appReducer(state, action)
};

export default rootReducer
