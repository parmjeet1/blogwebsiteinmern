import { ERROR_LOGIN_REQUEST_DATA, INIT_LOGIN_REQUEST, LOGOUT_USER, SET_LOGIN_REQUEST_DATA } from "./action"

const initialState={
  data:{},
  isLoading:false,
  error:""
}

const  loginReducer=(state=initialState,action)=>{
switch(action.type){
    case INIT_LOGIN_REQUEST:
      return{
        ...state,
        isLoading:true,
        error:""
          
      }
      case SET_LOGIN_REQUEST_DATA:
      return{
        ...state,
        data:action.payload,
        isLoading:false,
        error:""
          
      }
      case ERROR_LOGIN_REQUEST_DATA:
      return{
        ...state,
        data:{} ,
        isLoading:false,
        error:action.payload
          
      }
      case LOGOUT_USER:
      return{
        ...state,
        data:{} ,
        isLoading:false,
        error:""
          
      }
      default: 
      return state;
}

}

export default loginReducer;