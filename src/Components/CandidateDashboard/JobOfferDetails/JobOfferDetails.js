import React from 'react';
import logo from '../../../images/job board.png'

const JobOfferDetails = ({job}) => {
    return (
        <div className="col-md-10 border d-flex align-items-center justify-content-between">
            <div className="applied-job-left d-flex align-items-center">
                <img src={logo} alt="" />
                <div>
                    <h3>{job.jobTitle}</h3>
                    
                    <small><span>Offered by <strong>{job.company}</strong></span><br /><span>{job.location}</span> </small>
                </div>
            </div>
            
            <div className="applied-job-right">
                <button className="btn btn-primary">Apply</button>
            </div>
        </div>
    );
};

export default JobOfferDetails;