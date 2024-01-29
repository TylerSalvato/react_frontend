
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,

});

    const signUp = async (userData) => {
        try {
          const response = await axios.post('/api/users/sign_up', userData);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    
};

export default api;
