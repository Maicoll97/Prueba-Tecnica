import React, { useEffect, useState } from 'react';
import { fetchTasks, updateTask } from '../../api/tasks';

const SupervisorDashboard = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const data = await fetchTasks();
        setTasks(data);
    };

    const handleStatusChange = async (id, status) => {
        await updateTask(id, { status });
        loadTasks();
    };

    return (
        <div>
            <h1>Supervisor Dashboard</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name} - {task.status}
                        <button onClick={() => handleStatusChange(task.id, 'Completada')}>
                            Mark as Completed
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SupervisorDashboard;
