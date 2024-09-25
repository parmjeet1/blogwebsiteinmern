import toast from "react-hot-toast";
import apiEndPoints from "../../../utils/apiList";
import { serverCall } from "../../../utils/serverCall";
import { errorRegisterRequestData, initRegisterRequestData, setRegisterRequestData } from "./action"


export const registerUser = (data) =>{
    return async (dispatch)=>{
        dispatch(initRegisterRequestData());

        try {
            let result = await serverCall(apiEndPoints.AUTH_REGISTER, 'POST', data);
           //  console.log(result);
            if(result.success &&  result.data ){
               
                toast.success('User signup succesfully')
                dispatch(setRegisterRequestData(result.data))
            }else{
                toast.error(result.message)
                dispatch(errorRegisterRequestData(result.message))
            }
        } catch (error) {
            toast.error(error.message)
            dispatch(errorRegisterRequestData(error.message))
        }
    }
}