import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import JobOfferDetails from '../JobOfferDetails/JobOfferDetails';
const JobOffer = () => {
    const [jobOffers ,setJobOffers] = useState([])
    const loadData =() => {
        fetch(`https://serene-basin-34461.herokuapp.com/allJobs`)
        .then(response =>response.json())
        .then(data =>{
            console.log(data);
            setJobOffers(data)
        })
    }

    useEffect(()=>{
        loadData();
    },[])

    // const jobOffers= [
    //     {
    //         title:'Job Title',
    //         company:'Company Name',
    //         location:'Job Location',
    //         image:logo
    //     },
    //     {
    //         title:'Job Title',
    //         company:'Company Name',
    //         location:'Job Location',
    //         image:logo
    //     },
    //     {
    //         title:'Job Title',
    //         company:'Company Name',
    //         location:'Job Location',
    //         image:logo
    //     },
    //     {
    //         title:'Job Title',
    //         company:'Company Name',
    //         location:'Job Location',
    //         image:logo
    //     },
    // ]
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
               <div className="col-md-12">
               <h2 className="text-center mb-5">Job Offers</h2>
               </div>
                {
                    jobOffers.map(job => <JobOfferDetails job={job} key={job._id}></JobOfferDetails>)
                }
            </div>
        </div>
    );
};

export default JobOffer;