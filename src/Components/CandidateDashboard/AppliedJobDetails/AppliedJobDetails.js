import React from 'react';

const AppliedJobDetails = ({job}) => {
    console.log(job);
    return (
        <div className="col-md-10 border d-flex align-items-center justify-content-between">
            <div className="applied-job-left d-flex align-items-center">
                <img src={job.image} alt="" />
                <div>
                    <h4>{job.title}</h4>
                    <p><span>{job.company}</span> <span>{job.location}</span> </p>
                </div>
            </div>
            <div className="applied-job-middle">
                <p>{job.status}</p>
                <h4>Feedback</h4>
            </div>
            <div className="applied-job-right">
                <p>{job.submittedOn}</p>
            </div>
        </div>
    );
};

export default AppliedJobDetails;