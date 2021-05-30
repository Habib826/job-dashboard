import React from 'react';
import logo from '../../../images/job board.png'
import JobOfferDetails from '../JobOfferDetails/JobOfferDetails';
const JobOffer = () => {
    const jobOffers= [
        {
            title:'Job Title',
            company:'Company Name',
            location:'Job Location',
            image:logo
        },
        {
            title:'Job Title',
            company:'Company Name',
            location:'Job Location',
            image:logo
        },
        {
            title:'Job Title',
            company:'Company Name',
            location:'Job Location',
            image:logo
        },
        {
            title:'Job Title',
            company:'Company Name',
            location:'Job Location',
            image:logo
        },
    ]
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
               <div className="col-md-12">
               <h2 className="text-center mb-5">Job Offers</h2>
               </div>
                {
                    jobOffers.map(job => <JobOfferDetails job={job}></JobOfferDetails>)
                }
            </div>
        </div>
    );
};

export default JobOffer;