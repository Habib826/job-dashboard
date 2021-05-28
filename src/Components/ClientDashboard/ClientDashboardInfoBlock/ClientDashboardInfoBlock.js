import React from 'react';

const ClientDashboardInfoBlock = (props) => {
    const data = props.data;
    return (
        <div className="col-md-2">
            <div className={"dashboard-info-block "+ data.background}>
                <p style={{ fontWeight: '700' }}>{data.number}</p>
                <h4>{data.title}</h4>
            </div>
        </div>
    );
};

export default ClientDashboardInfoBlock;