import axios from '../utils/axiosInstance';

// Fetch all tasks
export const fetchTasks = async () => {
    try {
        const response = await axios.get('/tasks');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// CRUD functions for tasks
export const createTask = async (taskData) => {
    return await axios.post('/tasks', taskData);
};

export const updateTask = async (id, taskData) => {
    return await axios.put(`/tasks/${id}`, taskData);
};

export const deleteTask = async (id) => {
    return await axios.delete(`/tasks/${id}`);
};
