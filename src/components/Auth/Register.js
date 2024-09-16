import React, { useState } from 'react';
import { register } from '../../api/auth';

const Register = () => {
    const [userData, setUserData] = useState({
        email: '', password: '', role: 'Empleado'
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            alert('User registered successfully');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
                required
            />
            <select name="role" value={userData.role} onChange={handleChange}>
                <option value="Administrador">Administrador</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Empleado">Empleado</option>
            </select>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
