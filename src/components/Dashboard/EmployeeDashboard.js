import React, { useEffect, useState } from 'react';
import { fetchTasks } from '../../api/tasks';

const EmployeeDashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    return (
        <div>
            <h1>Employee Dashboard</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - {task.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EmployeeDashboard;
