import axios from '../utils/axiosInstance';

// Login function
export const login = async (credentials) => {
    try {
        const response = await axios.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Register function
export const register = async (userData) => {
    try {
        const response = await axios.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
