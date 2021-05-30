import React from 'react';

const JobOfferDetails = ({job}) => {
    return (
        <div className="col-md-10 border d-flex align-items-center justify-content-between">
            <div className="applied-job-left d-flex align-items-center">
                <img src={job.image} alt="" />
                <div>
                    <h4>{job.title}</h4>
                    <p><span>{job.company}</span> <span>{job.location}</span> </p>
                </div>
            </div>
            
            <div className="applied-job-right">
                <button className="btn btn-primary">Apply</button>
            </div>
        </div>
    );
};

export default JobOfferDetails;