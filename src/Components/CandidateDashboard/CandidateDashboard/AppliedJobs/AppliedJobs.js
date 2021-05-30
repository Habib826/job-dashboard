import React from 'react';
import logo from '../../../../images/job board.png'
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails'
const AppliedJobs = () => {
    const candidateJobs = [
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
        {
            title: 'Job Title',
            image: logo,
            company: 'Company Name',
            location:'Somewhere',
            status : 'On Progress',
            submittedOn: new Date().toLocaleDateString()
        },
    ]
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    candidateJobs.map(job => <AppliedJobDetails job={job}></AppliedJobDetails>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;