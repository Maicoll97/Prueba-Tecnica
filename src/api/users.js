import axios from '../utils/axiosInstance';

// Fetch all users
export const fetchUsers = async () => {
    try {
        const response = await axios.get('/users');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// CRUD functions for users
export const createUser = async (userData) => {
    return await axios.post('/users', userData);
};

export const updateUser = async (id, userData) => {
    return await axios.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
    return await axios.delete(`/users/${id}`);
};
