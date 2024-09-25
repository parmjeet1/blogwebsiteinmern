import axios from "axios";

export const serverCall = async(url, method, data={}, additonalHeader={}) =>{
    try {
        const token = localStorage.getItem('authToken')

        //Determine if the data is FormData
        const isFormData = data instanceof FormData;

        const headers = {
            'Authorization' : `Bearer ${token}`,
            ...(isFormData ? {'Content-Type' : 'multipart/form-data'}:{'Contaent-Type':'application/json'}),
            ...additonalHeader
        };

        const requestObject = {
            url,
            method,
            data,
            headers
        }

        //api calling using axios
      const response =  await axios.request(requestObject);
    
      if(response.status === 201 || response.status === 200){
        return {
            success: true,
            data: response.data,
            message: ''
        }
      }else{
        return {
            success: false,
            data:{},
            message: 'Unexpected response status'
        }
      }
    } catch (error) {
        // console.log(error)
        return {
            success: false,
            data: {},
            message: error.response?.data?.error || error.message || 'Network error in servercall'
        }
    }

}