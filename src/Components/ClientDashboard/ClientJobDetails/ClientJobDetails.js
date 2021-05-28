import React from 'react';
import './ClientJobDetails.css'

const ClientJobDetails = (props) => {
    const jobDetails = props.jobData;
    console.log(jobDetails)
    return (
        <div className="col-md-6">
            <div className="client-job-block">
                <div className="d-flex align-items-center justify-content-between">
                    <h4>{jobDetails.title}</h4>
                    <p>{jobDetails.date}</p>
                </div>
                <div className="position-relative">
                    <h4 className="job-heading">Location</h4>
                    <p>{jobDetails.location}</p>
                </div>
                <div className="position-relative">
                    <h4 className="job-heading status">Status</h4>
                    <div className="d-flex justify-content-between">
                        <h5>Screen</h5>
                        <p>{jobDetails.status.screen}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h5>Offer</h5>
                        <p>{jobDetails.status.offer}</p>
                    </div>
                </div>
                <div className="position-relative">
                    <h4 className="job-heading rejected">Rejected</h4>
                    
                    <div className="d-flex justify-content-between">
                        <h5>{jobDetails.candidate}</h5>
                        <p>More</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientJobDetails;