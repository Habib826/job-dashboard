import React from 'react';
import CandidateInfoBlock from '../CandidateInfoBlock/CandidateInfoBlock';

const CandidateDashboard = () => {
    const candidateSummery = [
        {
            title :'Selected Jobs',
            count: 20,
            date: new Date().toLocaleDateString(),
            icon: true
        },
        {
            title :'Clear Interview',
            count: 3,
            date: new Date().toLocaleDateString(),
            icon: true
        },
        {
            title :'Accepted Offer',
            count: 3,
            date: new Date().toLocaleDateString(),
            icon: true
        },
        {
            title :'Highest Sallery',
            count: 8.95,
            date: new Date().toLocaleDateString(),
            icon: false
        },
    ]
    return (
        <div className="container">
            <div className="row">
                {
                    candidateSummery.map(data => <CandidateInfoBlock data={data} key={data.title}></CandidateInfoBlock>)
                }
            </div>
        </div>
    );
};

export default CandidateDashboard;