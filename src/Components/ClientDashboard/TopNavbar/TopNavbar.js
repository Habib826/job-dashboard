import React from 'react';
import './TopNavbar.css';
import logo from '../../../images/job board.png'
import { Link, useHistory } from 'react-router-dom';
const TopNavbar = () => {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        // document.getElementById("main").style.marginLeft = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        // document.getElementById("main").style.marginLeft = "0";
    }
    const history = useHistory();
    const goToContact = () => {
        history.push('/contact')
    }
    const goToHome = () => {
        history.push('/')
    }
    return (
        <div className='container-fluid sticky-top' style={{background:'#e5e5e5'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div id="mySidenav" className="sidenav">
                            <Link to="#" onClick={closeNav}>&times;</Link>
                            <Link to="/client-dashboard"> <i className="fas fa-th-large"></i>Client Dashboard</Link>
                            <Link to="/post-job"> <i className="fas fa-briefcase"></i> Post A Jobs</Link>
                            <Link to="/client-jobs"> <i className="fas fa-briefcase"></i> Jobs</Link>
                            <Link to="/candidates"> <i className="fas fa-user"></i> Candidates</Link>
                            <Link to="/approval"> <i className="fas fa-user-check"></i> Approval</Link>
                            <Link to="/reports"> <i className="fas fa-chart-line"></i> Report</Link>
                            <p className="text-white">Candidate Menu</p>
                            <Link to="/candidate-dashboard">Candidate Dashboard</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/interview">Interview</Link>
                            <Link to="/job-offers">Offer</Link>
                            <p>Jobs</p>
                            <Link to="/applied-jobs">Applied Jobs</Link>
                            <Link to="/map-jobs">Map Jobs</Link>
                            <Link to="/live-jobs">Live Jobs</Link>
                        </div>

                        <div className="d-flex align-items-center">
                            <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={openNav}>&#9776;</span>
                            <img src={logo} alt="Job Board Logo" style={{ width: '100px' }} onClick={goToHome} />
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="topnav-right ml-auto d-flex align-items-center justify-content-center" style={{ maxWidth: '300px' }}>
                            <i className="fas fa-envelope" style={{ fontSize: '30px', borderRight: '1px solid #000', paddingRight: '10px', cursor: 'pointer' }} onClick={goToContact}></i>
                            <img src={logo} alt="user" style={{ width: '100px', borderRadius: '50%' }} />
                            <p>User Name</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNavbar;