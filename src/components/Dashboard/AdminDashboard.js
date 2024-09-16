import React, { useEffect, useState } from 'react';
import { fetchUsers, deleteUser } from '../../api/users';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const data = await fetchUsers();
        setUsers(data);
    };

    const handleDelete = async (id) => {
        await deleteUser(id);
        loadUsers();
    };

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.email} - {user.role}
                        <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
