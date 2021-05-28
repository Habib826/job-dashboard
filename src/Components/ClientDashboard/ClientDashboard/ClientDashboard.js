import React from 'react';
import ClientDashboardInfoBlock from '../ClientDashboardInfoBlock/ClientDashboardInfoBlock';
import './ClientDashboard.css';

const ClientDashboard = () => {
    const dataSummery = [
        {
            title: 'Total Hired',
            number: 40,
            background:'bg-success'
        },
        {
            title: 'Apps Per Hire',
            number: 12,
            background:'bg-primary'
        },
        {
            title: 'Average Time to Hire',
            number: 31,
            background:'bg-warning'
        },
        {
            title: 'Average Cost per Hire',
            number: '$'+150,
            background:'bg-danger'
        },
        {
            title: 'Open Positions',
            number: 20,
            background:'bg-info'
        },
    ]
    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    {
                        dataSummery.map(data => <ClientDashboardInfoBlock data={data}></ClientDashboardInfoBlock>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ClientDashboard;