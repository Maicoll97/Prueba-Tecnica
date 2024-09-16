import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import SupervisorDashboard from './components/Dashboard/SupervisorDashboard';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRoute path="/admin" component={AdminDashboard} />
                    <PrivateRoute path="/supervisor" component={SupervisorDashboard} />
                    <PrivateRoute path="/employee" component={EmployeeDashboard} />
                </Switch>
            </Router>
        </AuthProvider>
    );
};

export default App;
