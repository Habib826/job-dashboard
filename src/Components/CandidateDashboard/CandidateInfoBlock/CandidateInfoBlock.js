import React from 'react';

const CandidateInfoBlock = ({data}) => {
    console.log(data.icon);
    return (
        <div className="col-md-3 bg-success m-2 p-3 text-white">
            <div className="title d-flex justify-content-between align-items-center">
                <h4>{data.title}</h4>
                {
                    data.icon && <i className="fas fa-cog" style={{cursor:'pointer'}}></i>
                }
            </div>
            <div>
                <big>{data.count}</big>
                <p>{data.date}</p>
            </div>
        </div>
    );
};

export default CandidateInfoBlock;