const API_BASE_URL = 'http://localhost:5000/api/';

const apiEndPoints = {
    AUTH_LOGIN: `${API_BASE_URL}users/login`,
    AUTH_REGISTER: `${API_BASE_URL}users/register`,
    
    POST_CREATE:`${API_BASE_URL}posts`, 
    POSTS_GET:`${API_BASE_URL}posts`, 


};

export default apiEndPoints