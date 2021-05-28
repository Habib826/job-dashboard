import React from 'react';
import ClientJobDetails from '../ClientJobDetails/ClientJobDetails';

const ClientJob = () => {
    const jobData = [
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
        {
            title: 'Job Title',
            date: new Date().toLocaleDateString(),
            location:'Somewhere',
            status: {
                screen: 'interview',
                offer: 'onhold'
            },
            candidate: 'John Doe'
        },
    ]
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    jobData.map(jd => <ClientJobDetails jobData={jd}></ClientJobDetails>)
                }
            </div>
        </div>
    );
};

export default ClientJob;