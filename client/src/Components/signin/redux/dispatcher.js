import { errorLoginRequestData, initLoginRequestData, logoutUser } from "./action";
import toast from "react-hot-toast";
import { serverCall } from "../../../utils/serverCall";
import apiEndPoints  from "../../../utils/apiList";

export const loginUser = (data) => {

  return async (dispatch) => {
    dispatch(initLoginRequestData());

    try {
      let result = await serverCall(apiEndPoints.AUTH_LOGIN, "POST", data);
      console.log(result);
      if (result.success && result.data) {
        const token = result.data.token;
        localStorage.setItem('authToken', token)
        toast.success("login  succesfully");
        // navigate('/');
      } else {
        toast.error(result.message);
        dispatch(errorLoginRequestData(result.message));
      }
    } catch (error) {
      toast.error(error.message);
      dispatch(errorLoginRequestData(error.message));
    }
  };
};
export const logout=()=>{
    return(dispatch)=>{
        localStorage.removeItem('authToken');
        dispatch(logoutUser());
        toast.success("logout succesfully");
    }
}