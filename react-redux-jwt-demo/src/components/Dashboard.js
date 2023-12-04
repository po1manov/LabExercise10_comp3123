import React from 'react';
import { useSelector } from 'react-redux';

function Dashboard() {
    const user = useSelector(state => state.auth.user);

    return (
        <div>
            <h1>Dashboard</h1>
            {user && <p>Welcome, {user.username}!</p>}
        </div>
    );
}

export default Dashboard;
